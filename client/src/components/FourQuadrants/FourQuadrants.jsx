// src/components/FourQuadrants/FourQuadrants.jsx
import Grid from '../Grid/Grid';
import { useState, useEffect, useMemo } from 'react';
import Button from '@mui/material/Button';
import { IoAddOutline } from "react-icons/io5";
import Switch from '@mui/material/Switch';
import { toast } from 'react-toastify';
import EditPriorityTags from '../TaskForm/EditPriorityTags';
import TaskForm from '../TaskForm/TaskForm';
import { MdFilterList } from 'react-icons/md';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Chip from '@mui/material/Chip';
import { useNavigate, Link } from 'react-router-dom';
import './FourQuadrants.css';
import BACKEND_URL from '../../../Config';
import { autoHighPriority } from '../../utils/checkimptags';
import useGlobalStore from '../../store/useGlobalStore';
import axios from 'axios';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

function FourQuadrants({ hideTable, setHideTable }) {
  const color = ["#2196F3", "#F44336", "#000000", "#FF9800"];
  const [gridData, setGridData] = useState([]);
  const [open, setOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [editTask, setEditTask] = useState(null);
  const [openTagEditor, setOpenTagEditor] = useState(false);
  const [taskToTagEdit, setTaskToTagEdit] = useState(null);
  const [globalFilters, setGlobalFilters] = useState({ complexity: [], type: [], category: [], impact: [] });
  const [showGlobalFilters, setShowGlobalFilters] = useState(false);

  const navigate = useNavigate();

  // store
  const tasks = useGlobalStore(state => state.tasks);
  const fetchTasks = useGlobalStore(state => state.fetchTasks);
  const saveTask = useGlobalStore(state => state.saveTask);
  const markTaskCompleted = useGlobalStore(state => state.markTaskCompleted);
  const setTasksLocally = useGlobalStore(state => state.setTasksLocally);
  const isFocusMode = useGlobalStore(state => state.isFocusMode);
  const startFocusMode = useGlobalStore(state => state.startFocusMode);
  const endFocusMode = useGlobalStore(state => state.endFocusMode);
  const logTaskChangeInFocusMode = useGlobalStore(state => state.logTaskChangeInFocusMode);
  const focusCompletedTasks = useGlobalStore(state => state.focusCompletedTasks);

  const activeTasks = useMemo(() => tasks.filter(task => task.status !== 'completed'), [tasks]);

  useEffect(() => {
    fetchTasks().catch(err => console.error('fetchTasks error', err));
  }, [fetchTasks]);

  // Save or update task
  const saveTaskHandler = async (task, isEdit) => {
    try {
      const savedTask = await saveTask(task, isEdit);
      if (isEdit) {
        const oldTask = tasks.find(t => t.id === savedTask.id);
        if (isFocusMode && oldTask) {
          await logTaskChangeInFocusMode(oldTask, savedTask);
        }
        setEditTask(null);
        setOpen(false);
      } else {
        setOpen(false);
      }
    } catch (err) {
      console.error('Failed to save task', err);
      toast.error('Failed to save task');
    }
  };

  const handleTaskFieldChange = async (taskId, field, value) => {
    const prev = tasks;
    const updated = prev.map(t => t.id === taskId ? { ...t, [field]: value } : t);
    setTasksLocally(updated);

    const oldTask = prev.find(t => t.id === taskId);
    const newTask = updated.find(t => t.id === taskId);
    if (isFocusMode && oldTask && newTask) {
      await logTaskChangeInFocusMode(oldTask, newTask);
    }

    // Optimistically update server
    try {
      await axios.put(`${BACKEND_URL}/api/tasks/${taskId}`, newTask, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
    } catch (err) {
      console.error('Failed to patch field', err);
    }
  };

  const handleTagSave = async (updatedTags) => {
    try {
      const t = taskToTagEdit;
      if (!t) return;
      const updatedTask = { ...t, priority_tags: updatedTags };
      const saved = await saveTask(updatedTask, true);
      if (isFocusMode) {
        await logTaskChangeInFocusMode(t, saved);
      }
      setOpenTagEditor(false);
      setTaskToTagEdit(null);
    } catch (err) {
      console.error('Error saving tags', err);
      toast.error('Failed to save tags');
    }
  };

  // Processed tasks (auto priority)
  const processedTask = tasks.map(t => {
    const { priority, reason } = autoHighPriority({
      title: t.title,
      note: t.note,
      tags: t.tags || [],
      currentPriority: t.priority,
      currentReason: t.reason
    });
    return { ...t, priority, reason };
  });

  useEffect(() => {
    const saved = localStorage.getItem("focusMode");
    if (saved) {
      const { isFocusMode, startTime, completedTasks } = JSON.parse(saved);
      if (isFocusMode) {
        // sync with store
        // store.sync handled at init; we keep local UI in sync via store selector
      }
    }
  }, []);

  useEffect(() => {
    const categorizeTasksByPriority = (taskList) => {
      const impUrgentGrid = [];
      const impNotUrgentGrid = [];
      const notImpUrgentGrid = [];
      const notImpNotUrgentGrid = [];

      const today = new Date();
      const offsetToday = new Date(today.getTime() + 5.5 * 60 * 60 * 1000);
      const todayDate = offsetToday.toISOString().split("T")[0];

      let weekLastDate = new Date(offsetToday);
      weekLastDate.setDate(weekLastDate.getDate() + 5);
      weekLastDate = weekLastDate.toISOString().split("T")[0];

      const strategicTags = ['strategic work', 'deadline', 'project delivery work'];

      taskList.forEach(single => {
        if (single.status === "completed") return;

        const taskTags = (single.tags || []).map(t => t.toLowerCase());
        let priority = single.priority;
        let suggestion = "";

        if (strategicTags.some(tag => taskTags.includes(tag)) && priority !== 'high') {
          priority = 'high';
          if (!single.reason || single.reason.trim() === "") {
            suggestion = "reasonMissing";
            toast.warn(`Task "${single.title}" is marked high priority because of strategic tag, but reason is missing!`);
          }
        }

        const dueDate = single.due_date ? new Date(single.due_date).toISOString().split("T")[0] : null;
        const createdAt = single.created_at ? new Date(single.created_at).toISOString().split("T")[0] : null;

        if (!dueDate) {
          notImpNotUrgentGrid.push({ ...single, priority, suggestion });
        } else if (dueDate < todayDate && priority === "high") {
          impUrgentGrid.push({ ...single, priority, suggestion: suggestion || "overdueTask" });
        } else if (dueDate === todayDate && priority === "high") {
          impUrgentGrid.push({ ...single, priority, suggestion });
        } else if (dueDate > todayDate && dueDate <= weekLastDate && (priority === "high" || priority === "normal")) {
          impNotUrgentGrid.push({ ...single, priority, suggestion });
        } else if (createdAt === todayDate && dueDate === todayDate) {
          notImpUrgentGrid.push({ ...single, priority, suggestion });
        } else {
          notImpNotUrgentGrid.push({ ...single, priority, suggestion });
        }
      });

      const updatedGrid = [
        { title: "Important & Not Urgent", list: impNotUrgentGrid },
        { title: "Important & Urgent", list: impUrgentGrid },
        { title: "Not Important & Not Urgent", list: notImpNotUrgentGrid },
        { title: "Not Important & Urgent", list: notImpUrgentGrid }
      ];
      setGridData(updatedGrid);
    };

    categorizeTasksByPriority(activeTasks);
  }, [activeTasks]);

  const globalAvailableFilters = useMemo(() => {
    const tagCounts = { complexity: {}, type: {}, category: {}, impact: {} };
    activeTasks.forEach(task => {
      if (task.priority_tags) {
        Object.keys(tagCounts).forEach(group => {
          if (task.priority_tags[group]) {
            task.priority_tags[group].forEach(tag => {
              tagCounts[group][tag] = (tagCounts[group][tag] || 0) + 1;
            });
          }
        });
      }
    });
    const filters = {};
    Object.keys(tagCounts).forEach(group => (filters[group] = Object.keys(tagCounts[group]).filter(tag => tagCounts[group][tag] > 0)));
    return filters;
  }, [activeTasks]);

  const toggleGlobalFilter = (group, tag) => setGlobalFilters(prev => ({
    ...prev,
    [group]: prev[group].includes(tag) ? prev[group].filter(f => f !== tag) : [...prev[group], tag]
  }));

  const clearAllGlobalFilters = () => setGlobalFilters({ complexity: [], type: [], category: [], impact: [] });

  const handleEditTask = (task) => { setEditTask(task); setOpen(true); };

  const markTaskAsCompleted = (taskId) => {
    markTaskCompleted(taskId);
  };

  const handleTagEdit = (task) => {
    setTaskToTagEdit(task);
    navigate(`/edit-tags/${task.id}`);
  };

  const handleQtaskSave = (task) => {
    useGlobalStore.getState().setQTasksLocally([...(useGlobalStore.getState().qtasks || []), task]);
  };

  const handleSwitchChange = (event) => {
    setSwitchChecked(event.target.checked);
    setHideTable(event.target.checked);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) return `${hrs}h ${mins}m ${secs}s`;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
  };

  const startFocus = () => startFocusMode();
  const endFocus = () => endFocusMode();

  return (
    <>
      <div>
        <div style={{ marginBottom: '20px' }}>
          <div>
            <Button variant="contained" style={{ fontWeight: "bolder", marginLeft: 15 }} onClick={() => setOpen(true)}>
              <IoAddOutline /> Add Task
            </Button>
            <Button
              variant={isFocusMode ? "contained" : "outlined"}
              color={isFocusMode ? "error" : "primary"}
              style={{ fontWeight: "bold", marginLeft: 10 }}
              onClick={isFocusMode ? endFocus : startFocus}
            >
              {isFocusMode ? "Exit Focus Mode" : "Focus Mode"}
            </Button>

            <Button variant="contained" style={{ fontWeight: "bold", marginLeft: 10 }} onClick={() => navigate("/focus-summary")}>
              View Focus Summary
            </Button>
          </div>

          <div style={{ marginTop: '12px' }}>
            <Link to="/time-log" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" style={{ fontWeight: "bolder", marginLeft: 15 }}>
                <IoAddOutline /> Add Time Log
              </Button>
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 15 }}>
          <label htmlFor="toggleSwitch" name="toggle">Toggle to show table</label>
          <Switch {...label} checked={switchChecked} onChange={handleSwitchChange} size="medium" id='toggleSwitch' name="toggle" />
        </div>
      </div>

      <div className='gird-content'>
        <p>Aim to focus on Important and Not Urgent tasks to avoid these becoming urgent.</p>
        <p>Reprioritize your tasks by changing due dates or priority to focus on what matters most.</p>
      </div>

      {Object.values(globalAvailableFilters).some(arr => arr.length > 0) && (
        <div style={{ margin: '20px 15px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
          <div onClick={() => setShowGlobalFilters(!showGlobalFilters)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '12px 16px', borderBottom: showGlobalFilters ? '1px solid #e0e0e0' : 'none' }}>
            {showGlobalFilters ? <FaChevronDown style={{ marginRight: '8px', color: '#2196F3' }} /> : <FaChevronRight style={{ marginRight: '8px', color: '#2196F3' }} />}
            <MdFilterList style={{ marginRight: '8px', color: '#2196F3' }} />
            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
              Filter All Quadrants
            </span>
            {Object.values(globalFilters).flat().length > 0 && (
              <Button size="small" onClick={(e) => { e.stopPropagation(); clearAllGlobalFilters(); }} style={{ marginLeft: 'auto', fontSize: '0.8rem', minWidth: 'auto', padding: '4px 12px' }}>
                Clear All Filters
              </Button>
            )}
          </div>

          {showGlobalFilters && (
            <div style={{ padding: '16px' }}>
              {Object.entries(globalAvailableFilters).map(([group, tags]) =>
                tags.length > 0 && (
                  <div key={group} style={{ marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#555', marginRight: '12px', display: 'inline-block', minWidth: '80px' }}>
                      {group.charAt(0).toUpperCase() + group.slice(1)}:
                    </span>
                    <div style={{ display: 'inline-block' }}>
                      {tags.map(tag => (
                        <Chip key={tag} label={tag} size="small" onClick={() => toggleGlobalFilter(group, tag)} style={{
                          margin: '2px 4px',
                          fontSize: '0.75rem',
                          backgroundColor: globalFilters[group].includes(tag) ? '#2196F3' : '#e0e0e0',
                          color: globalFilters[group].includes(tag) ? 'white' : '#333',
                          cursor: 'pointer'
                        }} />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}

      <div className="main-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {gridData.map((grid, index) => (
          <Grid
            key={index}
            title={grid.title}
            taskList={grid.list}
            color={color}
            colorIndex={index}
            isFocusMode={isFocusMode}
            onEditTask={handleEditTask}
            onEditPriorityTags={handleTagEdit}
            globalFilters={globalFilters}
            onMarkComplete={markTaskAsCompleted}
          />
        ))}
      </div>

      <TaskForm
        open={open}
        onSave={saveTaskHandler}
        onClose={() => { setOpen(false); setEditTask(null); }}
        isUpdate={!!editTask}
        editTask={editTask}
      />

      <EditPriorityTags
        open={openTagEditor}
        onClose={() => setOpenTagEditor(false)}
        task={taskToTagEdit}
        onSave={handleTagSave}
        onEditPriorityTags={handleTagEdit}
      />
    </>
  );
}

export default FourQuadrants;
