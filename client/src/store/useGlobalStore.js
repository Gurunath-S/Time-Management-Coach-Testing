// src/store/useGlobalStore.js
import { create } from 'zustand';
import axios from 'axios';
import BACKEND_URL from '../../Config';
import { toast } from 'react-toastify';
// const BACKEND_URL = "http://localhost:5000";
const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp < Math.floor(Date.now() / 1000);
  } catch {
    return true;
  }
};

export const useGlobalStore = create((set, get) => ({
  // Auth
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  user: null,
  isLoggedIn: false,
  loadingAuth: true,
  authChecked: false,

  // Tasks
  tasks: [],
  qtasks: [],
  loadingTasks: false,
  error: null,

  // Focus mode
  isFocusMode: false,
  focusStartTime: null,
  focusCompletedTasks: [],

  // Helpers
  getAuthHeaders: () => {
    const token = get().token;
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
  },

  setToken: (newToken) => {
    if (newToken) {
      localStorage.setItem('token', newToken);
      set({ token: newToken });
    } else {
      localStorage.removeItem('token');
      set({ token: null });
    }
  },

  checkAuth: async () => {
    set({ loadingAuth: true });
    const token = localStorage.getItem('token');
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem('token');
      set({ token: null, user: null, isLoggedIn: false, loadingAuth: false, authChecked: true });
      
      return false;
    }

    try {
      const res = await axios.get(`${BACKEND_URL}/api/auth/profile`, get().getAuthHeaders());
      if (res.data?.user) {
        set({ user: res.data.user, isLoggedIn: true, loadingAuth: false, authChecked: true });
        return true;
      } else {
        localStorage.removeItem('token');
        set({ token: null, user: null, isLoggedIn: false, loadingAuth: false, authChecked: true });
        return false;
      }
    } catch (err) {
      console.error('Profile fetch failed', err);
      toast.error('Session expired or cannot connect. Please log in.');
      localStorage.removeItem('token');
      set({ token: null, user: null, isLoggedIn: false, loadingAuth: false, authChecked: true });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    if (window.google?.accounts?.id) window.google.accounts.id.disableAutoSelect();
    set({ token: null, user: null, isLoggedIn: false });
    window.dispatchEvent(new Event('logout'));
    window.location.href='/login'
  },

  // Tasks / qtasks
  fetchTasks: async () => {
    set({ loadingTasks: true, error: null });
    try {
      const [taskRes, qtaskRes] = await Promise.all([
        axios.get(`${BACKEND_URL}/api/tasks`, get().getAuthHeaders()),
        axios.get(`${BACKEND_URL}/api/qtasks`, get().getAuthHeaders()),
      ]);
      set({
        tasks: Array.isArray(taskRes.data) ? taskRes.data : (taskRes.data || []),
        qtasks: Array.isArray(qtaskRes.data) ? qtaskRes.data : (qtaskRes.data || []),
        loadingTasks: false,
      });
    } catch (err) {
      console.error('Failed fetching tasks', err);
      set({ error: err.response?.data?.message || 'Failed to fetch tasks', loadingTasks: false });
      if (err.response?.status === 401) {
        toast.error('Session expired. Please log in again.');
        get().logout();
      }
    }
  },

  // setTasksLocally: (tasks) => set({ tasks }),
  // setQTasksLocally: (qtasks) => set({ qtasks }),

  saveTask: async (task, isEdit = false) => {
    try {
      const method = isEdit ? 'put' : 'post';
      const url = isEdit ? `${BACKEND_URL}/api/tasks/${task.id}` : `${BACKEND_URL}/api/tasks`;
      const res = await axios[method](url, task, get().getAuthHeaders());
      const saved = res.data;
      if (isEdit) {
        set((state) => ({ tasks: state.tasks.map(t => (t.id === saved.id ? saved : t)) }));
      } else {
        set((state) => ({ tasks: [...state.tasks, saved] }));
      }
      toast.success(isEdit ? 'Task updated' : 'Task created');
      return saved;
    } catch (err) {
      console.error('saveTask failed', err);
      toast.error('Failed to save task');
      throw err;
    }
  },

  deleteTask: async (taskId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/tasks/${taskId}`, get().getAuthHeaders());
      set((state) => ({ tasks: state.tasks.filter(t => t.id !== taskId) }));
      toast.success('Task deleted');
    } catch (err) {
      console.error('deleteTask failed', err);
      toast.error('Failed to delete task');
    }
  },

  markTaskCompleted: async (taskId) => {
    // update locally
    const task = get().tasks.find(t => t.id === taskId);
    if (!task) return;
    const updatedLocal = get().tasks.map(t => (t.id === taskId ? { ...t, status: 'completed' } : t));
    set({ tasks: updatedLocal });

    // focus-mode localstore handling
    if (get().isFocusMode) {
      const raw = localStorage.getItem('focusMode');
      const saved = raw ? JSON.parse(raw) : null;
      const completedTask = { ...task, status: 'completed', completed_at: new Date().toISOString() };
      if (saved) {
        saved.completedTasks = saved.completedTasks || [];
        const idx = saved.completedTasks.findIndex(t => t.id === completedTask.id);
        if (idx !== -1) saved.completedTasks[idx] = completedTask;
        else saved.completedTasks.push(completedTask);
        localStorage.setItem('focusMode', JSON.stringify(saved));
        set({ focusCompletedTasks: saved.completedTasks });
      }
    }

    // update server
    try {
      await axios.put(`${BACKEND_URL}/api/tasks/${taskId}`, { ...task, status: 'completed' }, get().getAuthHeaders());
    } catch (err) {
      console.error('Failed to update task on server', err);
      toast.error('Failed to update task on server');
    }
  },

  // Focus-mode
  startFocusMode: (opts = {}) => {
    const startTime = Date.now();
    const focusData = { isFocusMode: true, startTime, completedTasks: [], ...opts };
    localStorage.setItem('focusMode', JSON.stringify(focusData));
    set({ isFocusMode: true, focusStartTime: startTime, focusCompletedTasks: [] });
  },

  endFocusMode: async () => {
    const { focusStartTime, focusCompletedTasks } = get();
    if (!get().isFocusMode) return;
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - (focusStartTime || endTime)) / 1000);
    const sessionSummary = {
      startTime: new Date(focusStartTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      timeSpent,
      completedTasks: (focusCompletedTasks || []).map(t => ({
        id: t.id,
        title: t.title,
        status: t.status,
        completed_at: t.completed_at || new Date().toISOString(),
      })),
    };

    try {
      await axios.post(`${BACKEND_URL}/api/focus`, sessionSummary, get().getAuthHeaders());
      toast.success('Focus session saved successfully!');
    } catch (err) {
      console.error('Failed to save focus session', err);
      toast.error('Failed to save focus session. Try again.');
    } finally {
      localStorage.removeItem('focusMode');
      set({ isFocusMode: false, focusStartTime: null, focusCompletedTasks: [] });
    }
  },

  logTaskChangeInFocusMode: async (oldTask, newTask) => {
    try {
      const raw = localStorage.getItem('focusMode');
      const focusData = raw ? JSON.parse(raw) : null;
      if (!focusData?.isFocusMode) return;

      const startTime = new Date(focusData.startTime);
      const now = new Date();
      const timeSpent = Math.floor((now - startTime) / 1000);

      const changes = {};
      Object.keys(newTask).forEach((key) => {
        if (['updated_at', 'created_at'].includes(key)) return;
        if (JSON.stringify(oldTask[key]) !== JSON.stringify(newTask[key])) {
          changes[key] = { before: oldTask[key], after: newTask[key] };
        }
      });
      if (Object.keys(changes).length === 0) return;

      await axios.post(`${BACKEND_URL}/api/focus/taskChange`, {
        sessionId: localStorage.getItem('currentFocusSessionId') || null,
        taskId: oldTask.id,
        timestamp: now.toISOString(),
        timeSpent,
        changes,
      }, get().getAuthHeaders());

      console.log('Focus Mode: logged task change', { taskId: oldTask.id, changes, timeSpent });
    } catch (err) {
      console.error('Failed to log task change in focus mode', err);
    }
  },

  syncFocusFromLocalStorage: () => {
    try {
      const raw = localStorage.getItem('focusMode');
      if (!raw) return;
      const { isFocusMode, startTime, completedTasks } = JSON.parse(raw);
      if (isFocusMode) {
        set({ isFocusMode: true, focusStartTime: startTime, focusCompletedTasks: completedTasks || [] });
      }
    } catch (e) {
      console.error('Failed to parse focusMode from localStorage', e);
    }
  },

  initApp: async () => {
    await get().checkAuth();
    get().syncFocusFromLocalStorage();
    if (get().isLoggedIn) await get().fetchTasks();
  },
}));

export default useGlobalStore;
