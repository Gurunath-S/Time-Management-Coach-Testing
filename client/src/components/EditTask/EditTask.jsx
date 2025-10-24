import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import './EditTask.css';
import BACKEND_URL from '../../../Config';

// ----- Utility Functions -----
const formatDateInput = (dateStr) => {
  if (!dateStr || isNaN(new Date(dateStr))) return ''; 
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`; 
};



 
 const formatDateDisplay = (dateStr) => {
  if (!dateStr || isNaN(new Date(dateStr))) return '';
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

// ----- Main Component -----
function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isUpdate = Boolean(id);

  const [taskId, setTaskId] = useState('');
  const [title, setTitle] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [note, setNote] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [tags, setTags] = useState([]);


  // ----- Fetch task data when editing -----
useEffect(() => {
  if (isUpdate) {
    fetch(`${BACKEND_URL}/api/tasks/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const safeData = {
          id: data.id || '',
          title: data.title || '',
          created_at: data.created_at ? formatDateInput(data.created_at) : '',
          due_date: data.due_date ? formatDateInput(data.due_date) : '',
          priority: data.priority || '',
          note: data.note || '',
          reason: data.reason || '',
          status: data.status || '',
          assigned_to: data.assigned_to || '',
          tags: data.tags || [], 
        };

       
        setTags(safeData.tags); 
        setTaskId(safeData.id);
        setTitle(safeData.title);
        setCreatedAt(safeData.created_at);
        setDueDate(safeData.due_date);
        setPriority(safeData.priority);
        setNote(safeData.note);
        setReason(safeData.reason);
        setStatus(safeData.status);
        setAssignedTo(safeData.assigned_to);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to fetch task');
      });
  }
}, [id, isUpdate]);


  // ----- Auto-priority logic based on tags in title/note -----
 useEffect(() => {
  const importantTags = ['Strategic Work', 'Deadline', 'Project Delivery Work'];

  // Combine title, note, and tags into one searchable string
  const combinedText = `${title} ${note} ${tags.join(' ')}`.toLowerCase();

  const isImportant = importantTags.some(tag => combinedText.includes(tag));

  if (isImportant && priority !== 'high') {
    setPriority('high');
    setReason((prev) => prev || 'Automatically marked high due to strategic keywords');
  }
}, [title, note, tags, priority]);



  // ----- Save Handler -----
 const handleSave = useCallback((e) => {
  e.preventDefault();

  const requiredFields = [title, createdAt, priority, status, assignedTo];
  if (requiredFields.some(field => !field)) {
    alert("Please fill all required fields before saving.");
    return;
  }

  if (priority === 'high' && !reason) {
    alert("Please provide a reason for high priority.");
    return;
  }

  const cleanedTask = {
    id: taskId || uuidv4(),
    title,
    created_at: new Date(createdAt),
    due_date: dueDate && !isNaN(new Date(dueDate)) ? new Date(dueDate) : null,
    priority,
    note,
    reason,
    status,
    assigned_to: assignedTo,
  };

  const method = isUpdate ? 'PUT' : 'POST';
  const url = isUpdate
    ? `${BACKEND_URL}/api/tasks/${id}`
    : `${BACKEND_URL}/api/tasks`;

  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(cleanedTask),
  })
    .then((res) => {
      if (!res.ok) throw new Error('Failed to save task');
      return res.json();
    })
    .then((savedTask) => {
      // ✅ Check for Focus Mode
      const focusData = JSON.parse(localStorage.getItem("focusMode"));
      if (focusData?.isFocusMode && status === "completed") {
        focusData.completedTasks = focusData.completedTasks || [];

        const existingIndex = focusData.completedTasks.findIndex(t => t.id === cleanedTask.id);
        const completedCopy = {
          ...cleanedTask,
          completed_at: new Date().toISOString(),
          status: 'completed',
        };

        if (existingIndex !== -1) {
          focusData.completedTasks[existingIndex] = completedCopy;
        } else {
          focusData.completedTasks.push(completedCopy);
        }

        localStorage.setItem("focusMode", JSON.stringify(focusData));
      }

      toast.success(isUpdate ? 'Task updated!' : 'Task created!');
      navigate('/');
    })
    .catch((err) => {
      console.error(err);
      toast.error('Error saving task');
    });
}, [
  taskId,
  title,
  createdAt,
  dueDate,
  priority,
  note,
  reason,
  status,
  assignedTo,
  id,
  isUpdate,
  navigate,
]);


  // ----- Render -----
  return (
    <div className="edit-task-container" style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#0b87b1' }}>
        {isUpdate ? 'Edit Task' : 'Add Task'}
      </h1>

      <form onSubmit={handleSave} className="form-grid">
        <div className="form-row">
          <label>Task Name</label>
          <TextField fullWidth required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-row">
          <label>Task Create Date</label>
          <TextField
            fullWidth
            type="date"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
          <small style={{ color: '#666' }}>
            Display: {formatDateDisplay(createdAt)}
          </small>
        </div>

        <div className="form-row">
          <label>Due Date (Optional)</label>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <TextField
  fullWidth
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
  inputProps={{
    maxLength: 10,
    pattern: "\\d{4}-\\d{2}-\\d{2}",
    placeholder: "YYYY-MM-DD",
  }}
/>

            {dueDate && (
              <Button
                variant="outlined"
                size="small"
                onClick={() => setDueDate('')}
                style={{ minWidth: '110px', padding: '4px 8px' }}
              >
                Clear
              </Button>
            )}
          </div>
          <small style={{ color: '#666' }}>
            Display: {formatDateDisplay(dueDate)}
          </small>
        </div>

        <div className="form-row">
          <label>Priority</label>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            fullWidth
          >
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="low">Low</MenuItem>
          </Select>
        </div>

        {priority === 'high' && (
          <div className="form-row full-width">
            <label>Reason for High Priority</label>
            <TextField
              fullWidth
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        )}

        <div className="form-row">
  <label>Note (Optional)</label>
  <TextField
    fullWidth
    multiline
    rows={4}
    value={note}
    onChange={(e) => setNote(e.target.value)}
    inputProps={{ maxLength: 4000 }} 
  />

  <small style={{ color: note.length >= 3800 ? 'red' : '#666' }}>
    {note.length}/4000 characters
  </small>
</div>


        <div className="form-row">
          <label>Status</label>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            required
          >
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
          </Select>
        </div>

        <div className="form-row">
          <label>Assigned To</label>
          <Select
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            fullWidth
            required
          >
            <MenuItem value="user1">User 1</MenuItem>
            <MenuItem value="user2">User 2</MenuItem>
            <MenuItem value="user3">User 3</MenuItem>
          </Select>
        </div>

        <div className="form-actions full-width">
          <Button
            variant="contained"
            style={{ backgroundColor: '#a1a1a1', color: 'white' }}
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: '#0b87b1', color: 'white' }}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditTaskPage;
