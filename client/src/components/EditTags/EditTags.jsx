// src/components/EditTags/EditTags.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import './EditTags.css';
import BACKEND_URL from '../../../Config';
import { autoHighPriority } from '../../utils/checkimptags';

const tagOptions = {
  complexity: [
    "Low Complexity Focus Task",
    "Low Complexity - Less Context Switching",
    "Medium Complexity Task - Focus Task",
    "Moderate Collaboration and Context Switching",
    "High Complexity Task - Focus Task",
    "High Collaboration and Conext Switching",
    "Wait Likely for Key Decisions/Inputs",
    "Depends on another task to be completed",
    "Blocks another task",
    "Someone is Waiting for this to completed faster",
    "Requires Research",
    "Not a Routine Task",
    "Groundbreaking Work",
    "Intense Focus Needed"
  ],
  type: [
    "Planned Technical Work",
    "Project Delivery Work",
    "Strategic Work",
    "Innovation/Creative Work",
    "Deliverable/Documentation",
    "Deadline",
    "Issue Resolution",
    "Escalated Problem",
    "Planned Non-Technical Work",
    "Group Task",
    "Collaboration",
    "Design Work",
    "Solution Development",
    "Creative Thinking"
  ],
  category: [
    "Sales - Qualification",
    "Marketing - Awareness",
    "R&D/Engineering",
    "Quality Assurance/Quality Control",
    "Operations",
    "Management/Leadership",
    "Meeting/Discussion Actions or Follow up",
    "Customer/Partner Engagement",
    "Vendor/Supplier Engagement",
    "Personal - Self",
    "Relationship Building",
    "Customer Retention/Recovery",
    "Personal Family",
    "Personal - Health",
    "Personal - Financial",
    "Marketing - Demand Generation",
    "Technology implementation/Evaluation",
    "Sales Closing/Negotiation"
  ],
  impact: [
    "Increase Revenue- Incremental",
    "Increase Revenue - Multiplier",
    "Save Costs",
    "Safety",
    "Compliance",
    "Legal Risk",
    "Growth Potential",
    "Increase Market Share",
    "Expand Market Reach",
    "Employee Experience",
    "Customer Experience"
  ]
};

export default function EditPriorityTags() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [tags, setTags] = useState({ complexity: [], type: [], category: [], impact: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/tasks/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        if (!res.ok) throw new Error('Failed to fetch task');
        const data = await res.json();
        setTask(data);
        setTags(data.priority_tags || { complexity: [], type: [], category: [], impact: [] });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, [id]);

  useEffect(() => {
    const { priority: newPriority, reason: newReason } = autoHighPriority({
      title: task?.title || '',
      note: task?.note || '',
      tags: (tags.complexity || []).concat(tags.type || [], tags.category || [], tags.impact || []),
      currentPriority: task?.priority || 'normal',
      currentReason: task?.reason || ''
    });
    if (task && (newPriority !== task.priority || newReason !== task.reason)) {
      setTask(prev => ({ ...prev, priority: newPriority, reason: newReason }));
    }
  }, [tags, task]);

  const handleChange = (group) => (event) => {
    setTags(prev => ({ ...prev, [group]: event.target.value }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleSubmit = async () => {
    try {
      const updatedTask = { ...task, priority_tags: tags };
      const res = await fetch(`${BACKEND_URL}/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(updatedTask)
      });
      if (!res.ok) throw new Error('Failed to update task');
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><CircularProgress /></div>;
  }

  if (!task) return <div style={{ textAlign: 'center', marginTop: 50 }}>Task not found</div>;

  return (
    <div className="edit-priority-container" style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h1>Edit Priority Tags for: {task.title}</h1>
      <p style={{ color: '#666' }}>Task Description: {task.note || 'No Description mentioned'}</p>
      <p style={{ color: '#666' }}>Due Date: {formatDate(task.due_date)}</p>
      <p style={{ color: '#666' }}>Status: {task.status}</p>
      <p style={{ color: '#666' }}>Priority: {task.priority}</p>

      {Object.entries(tagOptions).map(([group, options]) => (
        <FormControl fullWidth style={{ marginBottom: 10 }} key={group}>
          <InputLabel style={{ backgroundColor: '#0b87b179', borderRadius: '10%', padding: 5, color: 'black' }}>
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </InputLabel>
          <Select
            multiple
            value={tags[group]}
            onChange={handleChange(group)}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 400, width: 'auto', minWidth: 350, maxWidth: 700, whiteSpace: 'normal', wordWrap: 'break-word'
                }
              }
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                <Checkbox checked={tags[group]?.includes(option)} />
                <ListItemText primary={option} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: '100%' } }} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}

      <div className="button-row" style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={() => navigate('/')} style={{ background: '#a1a1a1', color: 'white' }}>Cancel</Button>
        <Button onClick={handleSubmit} style={{ background: '#0b87b1', color: 'white' }}>Save Tags</Button>
      </div>
    </div>
  );
}
