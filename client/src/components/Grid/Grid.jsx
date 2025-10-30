import React, { useMemo, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import { FaFire, FaRegClock, FaPauseCircle, FaExclamationTriangle } from "react-icons/fa";
import Button from '@mui/material/Button';
import { MdLabel } from 'react-icons/md';
import Chip from '@mui/material/Chip';

function Grid({
  taskList = [],
  title,
  color,
  colorIndex,
  isFocusMode,
  onEditTask,
  onEditPriorityTags,
  onFieldChange, 
  globalFilters,
}) {
  const filteredTasks = useMemo(() => {
    if (!globalFilters || Object.values(globalFilters).every(arr => arr.length === 0)) {
      return taskList;
    }
    return taskList.filter(task => {
      if (!task.priority_tags) return false;
      return Object.keys(globalFilters).every(group => {
        if (globalFilters[group].length === 0) return true;
        return globalFilters[group].some(filter =>
          task.priority_tags[group]?.includes(filter)
        );
      });
    });
  }, [taskList, globalFilters]);

  const navigate = useNavigate();

  // Local state for expanded tag view
  const [expandedTasks, setExpandedTasks] = useState({});

  const toggleTags = (taskId) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "Not Set";
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatTime = (seconds) => {
    const secs = Number(seconds) || 0;
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remSecs.toString().padStart(2, "0")}`;
  };

  const handleEditClick = (taskID) => {
  // prevent li click
  navigate(`/edit-tasks/${taskID}`);
};



  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ flexShrink: 0 }}>
        <h4
          style={{
            marginBottom: "10px",
            fontSize: "1.2rem",
            color: color[colorIndex],
            borderBottom: "2px solid #f0f0f0",
            paddingBottom: "5px",
          }}
        >
          {title === "Important & Not Urgent" && <FaRegClock />}
          {title === "Important & Urgent" && <FaFire />}
          {title === "Not Important & Not Urgent" && <FaPauseCircle />}
          {title === "Not Important & Urgent" && <FaExclamationTriangle />}
          <span style={{ marginLeft: "5px" }}>{title}</span>
          <span style={{ fontSize: "0.8rem", color: "#666", marginLeft: "10px" }}>
            ({filteredTasks.length}/{taskList.length})
          </span>
        </h4>
      </div>

      {/* Tasks */}
      <div
        className="grid-container"
        style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {filteredTasks.length === 0 ? (
            <p
              style={{
                color: "#999",
                fontStyle: "italic",
                textAlign: "center",
                padding: "20px",
              }}
            >
              {taskList.length === 0
                ? "No tasks in this category."
                : "No tasks match the selected filters."}
            </p>
          ) : (
            filteredTasks.map((task, index) => {
              const allTags = task.priority_tags
                ? Object.values(task.priority_tags).flat()
                : [];
              const showAll = expandedTasks[task.id] || false;
              const visibleTags = showAll ? allTags : allTags.slice(0, 3);
              const hiddenCount = allTags.length - visibleTags.length;

              return (
                <li
                  key={task.id || index}
                  style={{
                    cursor: isFocusMode ? "pointer" : "default",
                    padding: "12px",
                    margin: "8px 0",
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "6px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                  onClick={() => isFocusMode && onEditTask(task)}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
<span style={{ fontSize: "16px", flex: 1, minWidth: "200px" }}>
  <strong>
    {index + 1}.{' '}
    {isFocusMode ? (
  <input
    value={task.title}
    onChange={(e) => handleTaskFieldChange(task.id, 'title', e.target.value)}
    style={{
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '2px 4px',
      border: 'none', 
      outline: 'none',
      background: 'transparent',
    }}
  />
) : (
  task.title
)}
  </strong>
  <br />
  <span style={{ fontSize: "14px", color: "#666" }}>
    Due: {formatDate(task.due_date)}
    {task?.suggestion && (
      <strong style={{ color: "red", marginLeft: "8px" }}>
        {task.suggestion}
      </strong>
    )}
  </span>
  <span style={{ fontSize: "14px", color: "#666", marginLeft: "10px" }}>
    Time Spent: {formatTime(task.timeSpentSeconds)}
  </span>
</span>



                  <div
  style={{ display: "flex", alignItems: "center", gap: "8px" }}
  onClick={(e) => e.stopPropagation()}
>
  <span
    style={{
      padding: "4px 8px",
      background:
        task.priority === "high"
          ? "#e57373"
          : task.priority === "normal"
          ? "#fff176"
          : "#81C784",
      borderRadius: "12px",
      fontSize: "0.8rem",
      fontWeight: "bold",
      textTransform: "capitalize",
    }}
  >
    {task.priority || "normal"}
  </span>

  <Button
    size="small"
    onClick={() => onEditPriorityTags(task)}
    style={{
      minWidth: "auto",
      padding: "2px 10px",
      backgroundColor: "#ad5fecff",
      color: "white",
      borderRadius: "8px",
    }}
  >
    <MdLabel style={{ marginRight: "4px" }} />
    Tags
  </Button>

  {isFocusMode && (
  <button
    onClick={(e) => handleEditClick(task.id)}
    style={{
      textDecoration: 'none',
      color: 'white',
      backgroundColor: '#1976d2',
      padding: '4px 10px',
      borderRadius: '8px',
      fontSize: '0.75rem',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Edit
  </button>
)}

</div>

                  </div>

                  {/* Tags with expand/collapse */}
                  {allTags.length > 0 && (
                    <div
                      style={{
                        marginTop: "8px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "4px",
                      }}
                    >
                      {visibleTags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          style={{
                            fontSize: "0.6rem",
                            height: "20px",
                            backgroundColor: "#f0f0f0",
                            color: "#666",
                          }}
                        />
                      ))}

                      {hiddenCount > 0 && !showAll && (
                        <Chip
                          label={`+${hiddenCount} more`}
                          size="small"
                          style={{
                            fontSize: "0.6rem",
                            height: "20px",
                            backgroundColor: "#e0e0e0",
                            color: "#333",
                            cursor: "pointer",
                          }}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering task click
                            toggleTags(task.id);
                          }}
                        />
                      )}

                      {showAll && allTags.length > 3 && (
                        <Chip
                          label="Show less"
                          size="small"
                          style={{
                            fontSize: "0.6rem",
                            height: "20px",
                            backgroundColor: "#ddd",
                            color: "#333",
                            cursor: "pointer",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTags(task.id);
                          }}
                        />
                      )}
                    </div>
                  )}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export default Grid;
