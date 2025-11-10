import React, { useState } from 'react';
import './QuickTaskForm.css';
import { toast } from 'react-toastify';
import BACKEND_URL from '../../../Config';

export default function QuickTaskFormPage() {
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [selectedWorkTasks, setSelectedWorkTasks] = useState([]);
  const [selectedPersonalTasks, setSelectedPersonalTasks] = useState([]);
  const [user, setUser] = useState('');

  // ✅ Define current year
  const currentYear = new Date().getFullYear();

  const workTasks = [
    "Answer Incoming calls",
    "Emails from Customer(s) that need my response",
    "Email from Others and Required Immediate attention from me",
    "Follow up in Person that is time sensitive",
    "VIP interaction (Senior Leadership)",
    "Quick huddle(s) with 2+ people",
    "SMS or WhatsApp Conversation(s) with 10+ messages",
    "Quality issues",
    "Schedule issues",
    "Finance Matters (Bank/Invoice/Salary)",
    "Schedule/Reschedule Meetings",
    "Brainstorm options",
    "Logistics for Travel/Event",
    "Watch/Post on Social Media for work",
    "Other (Work)"
  ];

  const personalTasks = [
    "Answer Incoming calls",
    "Email from Others",
    "Follow up in Person",
    "SMS or WhatsApp 10+ messages",
    "Finance Matters",
    "Logistics for Travel/Event",
    "Run errand(s)",
    "Watch/Post on Social Media",
    "Household Chores",
    "Other (Personal)"
  ];

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const selectedYear = selectedDate.getFullYear();

    if (selectedYear !== currentYear) {
      alert(`Please select a date from the current year (${currentYear}) only.`);
      setDate(''); // reset invalid date
      return;
    }

    setDate(e.target.value);
  };

  const handleCheckbox = (task, type) => {
    const handler = type === 'work' ? selectedWorkTasks : selectedPersonalTasks;
    const setter = type === 'work' ? setSelectedWorkTasks : setSelectedPersonalTasks;

    if (handler.includes(task)) {
      setter(handler.filter((t) => t !== task));
    } else {
      setter([...handler, task]);
    }
  };

  const handleReset = () => {
    setDate('');
    setNotes('');
    setTimeSpent('');
    setSelectedWorkTasks([]);
    setSelectedPersonalTasks([]);
    setUser('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !timeSpent || (selectedWorkTasks.length === 0 && selectedPersonalTasks.length === 0)) {
      alert("Please fill all required fields and select at least one task.");
      return;
    }

    const quickLog = {
      id: `${Date.now()} min`,
      date: new Date(date),
      workTasks: selectedWorkTasks,
      personalTasks: selectedPersonalTasks,
      notes,
      timeSpent: `${timeSpent} min`,
    };

    try {
      const req = await fetch(`${BACKEND_URL}/api/qtasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(quickLog),
      });

      if (!req.ok) throw new Error('Failed to save Time Log');

      toast.success("Time Log entry saved.");
      handleReset();
    } catch (error) {
      console.error("Error saving task:", error);
      toast.error('Failed to save task');
    }
  };

  return (
    <div className="quick-task-page">
      <h2>"Time Log for Completion"</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-field center-align">
          <label>Date:</label>
          <input
            type="date"
            className="full-input"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        <div style={{ gridColumn: "1 / span 2" }}>
          <h4>Select Tasks (Work):</h4>
          <div className="checkbox-group">
            {workTasks.map((task, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  checked={selectedWorkTasks.includes(task)}
                  onChange={() => handleCheckbox(task, 'work')}
                />
                {task}
              </label>
            ))}
          </div>
        </div>

        <div style={{ gridColumn: "1 / span 2" }}>
          <h4>Select Tasks (Outside Work):</h4>
          <div className="checkbox-group">
            {personalTasks.map((task, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  checked={selectedPersonalTasks.includes(task)}
                  onChange={() => handleCheckbox(task, 'personal')}
                />
                {task}
              </label>
            ))}
          </div>
        </div>

        <div style={{ gridColumn: "1 / span 2" }}>
          <label>Notes:</label>
          <textarea
            placeholder="Add any notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label>Total time spent (min):</label>
          <input
            type="number"
            min="1"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
            required
          />
        </div>

        <div className="btn-group">
          <button type="submit">Save</button>
          <button type='button' onClick={()=>history.back()}>Cancel</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}
