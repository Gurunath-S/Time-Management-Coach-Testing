import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './TaskForm.css';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';

function TaskForm({ open, onSave, onClose, editTask = null, setTask }) {
  const isUpdate = !!editTask;

  const [newtask, setNewTask] = useState({
    id: '',
    title: '',
    created_at: '',
    due_date: '',
    priority: '',
    note: '',
    reason: '',
    status: '',
    assigned_to: '',
  });

 
  const formatDateForInput = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const offset = d.getTimezoneOffset();
    const localDate = new Date(d.getTime() - offset * 60 * 1000);
    return localDate.toISOString().split('T')[0];
  };

  const formatDateDisplay = (dateStr) => {
    if (!dateStr || isNaN(new Date(dateStr))) return '';
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    if (editTask) {
      setNewTask({
        ...editTask,
        created_at: editTask.created_at ? formatDateForInput(editTask.created_at) : '',
        due_date: editTask.due_date ? formatDateForInput(editTask.due_date) : '',
      });
    } else {
      setNewTask({
        id: '',
        title: '',
        created_at: '',
        due_date: '',
        priority: '',
        note: '',
        reason: '',
        status: '',
        assigned_to: '',
      });
    }
  }, [editTask]);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    const requiredFields = ['title', 'created_at', 'priority', 'status', 'assigned_to'];
    const missingFields = requiredFields.filter((field) => !newtask[field]);

    if (missingFields.length > 0) {
      alert(`Please fill all required fields: ${missingFields.join(', ')}`);
      return;
    }

    if (newtask.priority === 'high' && !newtask.reason) {
      alert("Please provide a reason for high priority.");
      return;
    }

    const cleanedTask = {
      ...newtask,
      id: newtask.id || uuidv4(),
      created_at: newtask.created_at ? new Date(newtask.created_at) : null,
      due_date: newtask.due_date ? new Date(newtask.due_date) : null,
    };

    if (typeof onSave === 'function') {
      onSave(cleanedTask);
    }

    setNewTask({
      id: '',
      title: '',
      created_at: '',
      due_date: '',
      priority: '',
      note: '',
      reason: '',
      status: '',
      assigned_to: '',
    });

    onClose();
  };

  return (
    <Dialog open={open}>
      <form className="dialog-form" onSubmit={handleSave}>
        <DialogTitle style={{ textAlign: 'center', color: 'blue' }}>
          {isUpdate ? 'Edit Task' : 'Add Task'}
        </DialogTitle>

        <DialogContent>
          <div className="form-row full-width">
            <label>Task Name</label>
            <TextField
              autoFocus
              required
              type="text"
              name="title"
              variant="outlined"
              value={newtask.title}
              onChange={handlechange}
            />
          </div>

          <div className="form-columns">
            <div className="form-column">
              <div className="form-row">
                <label>Task Create Date</label>
                <TextField
                required
                type="date"
                name="created_at"
                variant="outlined"
                value={newtask.created_at}
                InputLabelProps={{ shrink: true }}
                onChange={handlechange}
                inputProps={{
                  maxLength: 10,
                  pattern: "\\d{4}-\\d{2}-\\d{2}",
                  placeholder: "YYYY-MM-DD",
                  }}
                 />

                <small style={{ color: '#666' }}>
                  Display: {formatDateDisplay(newtask.created_at)}
                </small>
              </div>

              <div className="form-row">
                <label>Priority</label>
                <Select
                  name="priority"
                  value={newtask.priority}
                  onChange={handlechange}
                  defaultValue=""
                  required
                >
                  <MenuItem value="high">High</MenuItem>
                  <MenuItem value="normal">Normal</MenuItem>
                  <MenuItem value="low">Low</MenuItem>
                </Select>
              </div>

              <div className="form-row">
                <label>Status</label>
                <Select
                  name="status"
                  value={newtask.status}
                  defaultValue=""
                  onChange={handlechange}
                  required
                >
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="in progress">In Progress</MenuItem>
                </Select>
              </div>
            </div>

            <div className="form-column">
<div className="form-row">
  <label>Due Date (Optional)</label>
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    <TextField
      type="date"
      name="due_date"
      variant="outlined"
      value={newtask.due_date}
      onChange={handlechange}
      InputLabelProps={{ shrink: true }}
      inputProps={{
        style: {
          fontSize: '16px',
          minWidth: '135px', 
          fontFamily: 'inherit',
        }
      }}
    />

    {newtask.due_date && (
      <Button
        variant="outlined"
        size="small"
        onClick={() =>
          setNewTask((prev) => ({ ...prev, due_date: '' }))
        }
        style={{ minWidth: '110px', padding: '4px 8px' }}
      >
        Clear
      </Button>
    )}
  </div>
  <small style={{ color: '#666' }}>
    Display: {formatDateDisplay(newtask.due_date)}
  </small>
</div>


              <div className="form-row">
                <label>Assigned To</label>
                <Select
                  name="assigned_to"
                  value={newtask.assigned_to}
                  defaultValue=""
                  onChange={handlechange}
                  required
                >
                  <MenuItem value="user1">User 1</MenuItem>
                  <MenuItem value="user2">User 2</MenuItem>
                  <MenuItem value="user3">User 3</MenuItem>
                </Select>
              </div>

              <div className="form-row">
  <label>Note (Optional)</label>
  <TextField
    type="text"
    name="note"
    variant="outlined"
    value={newtask.note || ''}
    onChange={handlechange}
    multiline
    rows={4}
    inputProps={{ maxLength: 4000 }} 
  />
  <small style={{ color: '#666' }}>
    {newtask.note?.length || 0}/4000 characters
  </small>
</div>

       
            </div>
          </div>

          {newtask.priority === 'high' && (
  <div className="form-row full-width">
    <label>Reason for High Priority</label>
    <TextField
      required
      type="text"
      name="reason"
      variant="outlined"
      value={newtask.reason || ''}
      onChange={handlechange}
      multiline
      rows={4}
      inputProps={{ maxLength: 4000 }} 
    />
  </div>
)}

        </DialogContent>

        <DialogActions>
          <Button style={{ backgroundColor: '#a1a1a1ff', color: 'white' }} onClick={onClose}>
            Cancel
          </Button>
          <Button style={{ backgroundColor: '#0b87b1ff', color: 'white' }} type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default TaskForm;
