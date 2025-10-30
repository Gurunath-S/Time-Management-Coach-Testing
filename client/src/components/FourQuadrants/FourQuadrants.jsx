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
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './FourQuadrants.css';
import BACKEND_URL from '../../../Config';
import FocusSummary from '../FourQuadrants/FocusSummary'; 
import { autoHighPriority } from '../../utils/checkimptags';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

function FourQuadrants({ tasks, setTask, setHideTable = () => {}, setQtasks = () => {} }) {
  const color = ["#2196F3", "#F44336", "#000000", "#FF9800"];
  const [gridData, setGridData] = useState([]);
  const [open, setOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [editTask, setEditTask] = useState(null);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [preFocusGridCount, setPreFocusGridCount] = useState({});
  const [openTagEditor, setOpenTagEditor] = useState(false);
  const [taskToTagEdit, setTaskToTagEdit] = useState(null);
  const [completedDuringFocus, setCompletedDuringFocus] = useState([]);
  const [globalFilters, setGlobalFilters] = useState({
    complexity: [],
    type: [],
    category: [],
    impact: []
  });
  const [showGlobalFilters, setShowGlobalFilters] = useState(false);
  const navigate = useNavigate();
  const activeTasks = useMemo(() => tasks.filter(task => task.status !== 'completed'), [tasks]);

  // Save or update task
  const saveTaskToBackend = async (task, isEdit) => {
    const method = isEdit ? 'put' : 'post';
    const url = isEdit
      ? `${BACKEND_URL}/api/tasks/${task.id}`
      : `${BACKEND_URL}/api/tasks`;

    const res = await axios[method](url, task, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    return res.data;
  };

  // Handle saving task (create or update)
const handleTaskSave = async (task) => {
  const isEdit = !!editTask;
  try {
    const savedTask = await saveTaskToBackend(task, isEdit);

    if (isEdit) {
      // Find old version before replacing it
      const oldTask = tasks.find(t => t.id === savedTask.id);
      setTask(prev => prev.map(t => t.id === savedTask.id ? savedTask : t));

      // ✅ Log difference
      if (isFocusMode && oldTask) {
        await logTaskChangeInFocusMode(oldTask, savedTask);
      }

      toast.success("Task updated");
    } else {
      setTask(prev => [...prev, savedTask]);
      toast.success("Task created");
    }

    setEditTask(null);
    setOpen(false);
  } catch (error) {
    console.error("Failed to save task", error);
    toast.error("Failed to save task");
  }
};





const handleTaskFieldChange = async (taskId, field, value) => {
  onFieldChange(taskId, field, value);
  setTasks(prev => {
    const updatedTasks = prev.map(t => {
      if (t.id === taskId) {
        const updated = { ...t, [field]: value };

        // 🔥 Log change in focus mode
        if (isFocusMode && currentFocusSessionId) {
          logTaskChangeInFocusMode(t, updated);
        }

        return updated;
      }
      return t;
    });
    return updatedTasks;
  });
};






const handleTagSave = async (updatedTags) => {
  try {
    const updatedTask = { ...taskToTagEdit, priority_tags: updatedTags };
    const savedTask = await saveTaskToBackend(updatedTask, true);

    // ✅ Log tag changes
    if (isFocusMode) {
      await logTaskChangeInFocusMode(taskToTagEdit, savedTask);
    }

    setTask(prev => prev.map(t => t.id === savedTask.id ? savedTask : t));
    toast.success("Tags saved");
    setTaskToTagEdit(null);
    setOpenTagEditor(false);
  } catch (error) {
    console.error("Error saving tags", error);
    toast.error("Failed to save tags");
  }
};




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
      setIsFocusMode(true);
      setStartTime(startTime);
      // sync state with localStorage
      setCompletedDuringFocus(completedTasks || []);
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

  const updatedTaskList = taskList.map(single => {
    if (single.status === "completed") return single;

    const taskTags = (single.tags || []).map(t => t.toLowerCase());
    let priority = single.priority;
    let suggestion = "";

    // 🔥 Set high priority if strategic tag
    if (strategicTags.some(tag => taskTags.includes(tag)) && priority !== 'high') {
      priority = 'high';
      // ✅ Check for reason
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

    return single;
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
    Object.keys(tagCounts).forEach(group => {
      filters[group] = Object.keys(tagCounts[group]).filter(tag => tagCounts[group][tag] > 0);
    });

    return filters;
  }, [activeTasks]);

  const toggleGlobalFilter = (group, tag) => {
    setGlobalFilters(prev => ({
      ...prev,
      [group]: prev[group].includes(tag)
        ? prev[group].filter(f => f !== tag)
        : [...prev[group], tag]
    }));
  };

  const clearAllGlobalFilters = () => {
    setGlobalFilters({ complexity: [], type: [], category: [], impact: [] });
  };

  const hasActiveGlobalFilters = Object.values(globalFilters).some(arr => arr.length > 0);

  const handleEditTask = (task) => {
    setEditTask(task);
    setOpen(true);
  };


const markTaskAsCompleted = (taskId) => {
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    console.warn("Task not found:", taskId);
    return;
  }

  let savedRaw = localStorage.getItem("focusMode");
  console.log("Focus mode raw data:", savedRaw);
  let saved = savedRaw ? JSON.parse(savedRaw) : null;

  const completedTask = {
    ...task,
    status: 'completed',
    completed_at: new Date().toISOString(),
  };

  if (saved?.isFocusMode) {
    saved.completedTasks = saved.completedTasks || [];

    const existingIndex = saved.completedTasks.findIndex(t => t.id === task.id);

    if (existingIndex !== -1) {
      saved.completedTasks[existingIndex] = completedTask;
    } else {
      saved.completedTasks.push(completedTask);
    }

    localStorage.setItem("focusMode", JSON.stringify(saved));
    setCompletedDuringFocus(saved.completedTasks);

    console.log("Focus mode after adding completed task:", saved);
  } else {
    console.warn("Not in focus mode or no focusMode data");
  }

  const updatedTasks = tasks.map(t =>
    t.id === taskId ? { ...t, status: 'completed' } : t
  );
  setTask(updatedTasks);

  axios.put(`${BACKEND_URL}/api/tasks/${taskId}`, {
    ...task,
    status: 'completed'
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).catch(err => {
    console.error("Failed to update task on server", err);
  });
};










  const handleTagEdit = (task) => {
    console.log("Edit task clicked:", task.id);
    navigate(`/edit-tags/${task.id}`);
  };

  const handleQtaskSave = (task) => {
    try {
      if (setQtasks) {
        setQtasks(prev => [...prev, task]);
      }
    } catch (error) {
      console.error("Error saving Time Log:", error);
    }
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

// ✅ Log task changes only if focus mode is ON

const logTaskChangeInFocusMode = async (oldTask, newTask) => {
  try {
    const token = localStorage.getItem("token");
    const sessionId = localStorage.getItem("currentFocusSessionId");
    const focusModeData = JSON.parse(localStorage.getItem("focusMode") || "{}");

    // Exit if focus mode isn’t active or missing data
    if (!isFocusMode || !sessionId || !focusModeData.isFocusMode) return;

    const startTime = new Date(focusModeData.startTime);
    const now = new Date();
    const timeSpent = Math.floor((now - startTime) / 1000); // seconds since focus start

    // 🔍 Compare old vs new task data to detect changes
    const changes = {};
    Object.keys(newTask).forEach((key) => {
      // Ignore metadata fields that change automatically
      if (["updated_at", "created_at"].includes(key)) return;

      const oldVal = oldTask[key];
      const newVal = newTask[key];

      // Compare JSON to handle nested structures like arrays
      if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) {
        changes[key] = {
          before: oldVal,
          after: newVal,
        };
      }
    });

    // Nothing changed → skip logging
    if (Object.keys(changes).length === 0) return;

    // 📝 Send log to backend
    await axios.post(
      `${BACKEND_URL}/api/focus/taskChange`,
      {
        sessionId,
        taskId: oldTask.id,
        timestamp: now.toISOString(),
        timeSpent,
        changes,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    console.log("Focus Mode: logged task change", { taskId: oldTask.id, changes, timeSpent });
  } catch (err) {
    console.error("❌ Failed to log task change in focus mode:", err.response?.data || err.message);
  }
};









const startFocusMode = () => {
  const focusModeData = {
    isFocusMode: true,
    startTime: Date.now(),
    completedTasks: []
  };

  localStorage.setItem("focusMode", JSON.stringify(focusModeData));
  setIsFocusMode(true);
};

const endFocusMode = async () => {
  if (!isFocusMode) {
    console.warn("Not in focus mode — nothing to send");
    return;
  }

  const endTime = Date.now();
  const timeSpent = Math.floor((endTime - startTime) / 1000);

  const savedFocusRaw = localStorage.getItem("focusMode");
  let savedFocus = null;
  try {
    savedFocus = savedFocusRaw ? JSON.parse(savedFocusRaw) : null;
  } catch (e) {
    console.error("Error parsing focusMode from localStorage", e);
  }

  const completedTasks = (savedFocus?.completedTasks || [])
    .filter(task => task.status === 'completed')
    .map(task => ({
      id: task.id,
      title: task.title,
      status: task.status,
      completed_at: task.completed_at || new Date().toISOString()
    }));

  if (completedTasks.length === 0) {
    alert("No tasks were completed during focus mode — nothing to save.");
    localStorage.removeItem("focusMode");
    setIsFocusMode(false);
    setCompletedDuringFocus([]);
    navigate('/login');
    return;
  }

  const sessionSummary = {
    startTime: new Date(startTime).toISOString(),
    endTime: new Date(endTime).toISOString(),
    timeSpent,
    completedTasks
  };

  try {
    await axios.post(`${BACKEND_URL}/api/focus`, sessionSummary, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    });

    // On success:
    toast.success("Focus session saved successfully!");
  } catch (error) {
    console.error("Failed to save focus session to backend", error);
    toast.error("Failed to save focus session. Please try again.");

    // Optional: Decide whether to still redirect or let user retry
    // return; // Uncomment if you want to stop here and not logout
  } finally {
    // Clear state and redirect regardless of success or failure
    localStorage.removeItem("focusMode");
    setIsFocusMode(false);
    setCompletedDuringFocus([]);
    navigate('/login');
  }
};










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
  onClick={isFocusMode ? endFocusMode : startFocusMode}
>
  {isFocusMode ? "Exit Focus Mode" : "Focus Mode"}
</Button>

               <Button
      variant="contained"
      style={{ fontWeight: "bold", marginLeft: 10 }}
      onClick={() => navigate("/focus-summary")}
    >
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
        <p>Aim to focus on Important and Not Urgent tasks to avoid these becoming urgent. This is a key trait of highly productive people</p>
        <p>Reprioritize your tasks by changing due dates or priority to focus on what matters most.</p>
      </div>

      {Object.values(globalAvailableFilters).some(arr => arr.length > 0) && (
        <div style={{ margin: '20px 15px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
          <div
            onClick={() => setShowGlobalFilters(!showGlobalFilters)}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '12px 16px',
              borderBottom: showGlobalFilters ? '1px solid #e0e0e0' : 'none'
            }}
          >
            {showGlobalFilters ? <FaChevronDown style={{ marginRight: '8px', color: '#2196F3' }} /> : <FaChevronRight style={{ marginRight: '8px', color: '#2196F3' }} />}
            <MdFilterList style={{ marginRight: '8px', color: '#2196F3' }} />
            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
              Filter All Quadrants {hasActiveGlobalFilters && `(${Object.values(globalFilters).flat().length} active)`}
            </span>
            {hasActiveGlobalFilters && (
              <Button
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  clearAllGlobalFilters();
                }}
                style={{ marginLeft: 'auto', fontSize: '0.8rem', minWidth: 'auto', padding: '4px 12px' }}
              >
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
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          onClick={() => toggleGlobalFilter(group, tag)}
                          style={{
                            margin: '2px 4px',
                            fontSize: '0.75rem',
                            backgroundColor: globalFilters[group].includes(tag) ? '#2196F3' : '#e0e0e0',
                            color: globalFilters[group].includes(tag) ? 'white' : '#333',
                            cursor: 'pointer'
                          }}
                        />
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
        onSave={handleTaskSave}
        onClose={() => {
          setOpen(false);
          setEditTask(null);
        }}
        isUpdate={!!editTask}
        editTask={editTask}
        setTask={setTask}
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
