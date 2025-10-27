import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { MdEdit } from 'react-icons/md';
import './TaskReport.css';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BACKEND_URL from '../../../Config';

function TaskReport({ tasks, setTask, filterStatus }) {
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = [];

    if (filterStatus === 'completed') {
      filtered = tasks.filter((task) => task.status === 'completed');
    } else if (filterStatus === 'pending') {
      filtered = tasks.filter((task) => task.status === 'pending');
    } else if (filterStatus === 'in progress') {
      filtered = tasks.filter((task) => task.status === 'in progress');
    } else {
      // 'all' or any other: show all except completed
      filtered = tasks.filter((task) => task.status !== 'completed');
    }

    setFilteredTasks(filtered);
  }, [tasks, filterStatus]);

  const handleUpdate = async (task) => {
    try {
      const res = await axios.put(`${BACKEND_URL}/api/tasks/${task.id}`, task, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const updatedTasks = tasks.map((item) => (item.id === task.id ? res.data : item));
      setTask(updatedTasks);
      toast.success('Task Updated');
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  const handleSearch = (searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filteredData = tasks.filter((task) =>
      task.title.toLowerCase().startsWith(lowerSearchTerm)
    );
    setFilteredTasks(filteredData);
  };

  const getBorderColor = () => {
    switch (filterStatus) {
      case 'completed':
        return '#28a745'; // green
      case 'pending':
        return '#FF0000'; // red
      case 'in progress':
        return '#ffc107'; // yellow
      default:
        return '#335f8d'; // default blue for 'all'
    }
  };

  return (
    <div className="task-report-container">
      <div className="table-header-row">
        <h3
          className={`table-label ${filterStatus.replace(/\s/g, '-')}-table`}
          style={{ borderLeft: `5px solid ${getBorderColor()}` }}
        >
          Showing:{' '}
          {filterStatus === 'all'
            ? 'Ongoing Tasks (Pending + In Progress)'
            : filterStatus === 'completed'
            ? 'Completed Tasks'
            : filterStatus === 'pending'
            ? 'Pending Tasks'
            : 'In Progress Tasks'}
        </h3>

        <TextField
          id="outlined-search"
          label="Search By Task Name"
          type="search"
          size="small"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        <div className="table-wrapper">
          <table className={`table ${filterStatus.replace(/\s/g, '-')}-table`}>
            <thead>
              <tr>
                <th className="th">Task Name</th>
                <th className="th">Created Date</th>
                <th className="th">Due Date</th>
                <th className="th">Priority</th>
                <th className="th">Status</th>
                <th className="th">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.length === 0 ? (
                <tr>
                  <td colSpan="7" className="td empty-state">
                    No tasks found
                  </td>
                </tr>
              ) : (
                filteredTasks
                  .filter((task) => Object.values(task).some((val) => val !== null && val !== ''))
                  .map((taskItem, index) => (
                    <tr key={index}>
                      <td className="td">{taskItem.title}</td>
                      <td className="td">
                        {taskItem.created_at
                          ? new Date(taskItem.created_at).toLocaleDateString('en-GB')
                          : ''}
                      </td>
                      <td className="td">
                        {taskItem.due_date
                          ? new Date(taskItem.due_date).toLocaleDateString('en-GB')
                          : ''}
                      </td>
                      <td className="td">{taskItem.priority}</td>
                      <td className="td">{taskItem.status}</td>
                      <td className="td">
                        <button
                          className="editButton"
                          onClick={() => navigate(`/edit-tasks/${taskItem.id}`)}
                          style={{ backgroundColor: getBorderColor() }}
                        >
                          <MdEdit fontSize={16} style={{ marginRight: 4 }} />
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskReport;

