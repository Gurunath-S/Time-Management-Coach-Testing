// src/components/Home/Home.jsx
import { useEffect, useRef, useState } from 'react';
import FourQuadrants from '../FourQuadrants/FourQuadrants';
import TaskReport from '../TaskReport/TaskReport';
import TaskCount from '../TaskCount/TaskCount';
import QtaskReport from '../TaskReport/QtaskReport';
import useGlobalStore from '../../store/useGlobalStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Home.css';

function Home({ isLoggedIn }) {
  const { tasks, qtasks, fetchTasks, loadingTasks } = useGlobalStore();
  const [hideTable, setHideTable] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const taskTableRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch tasks if not loaded
    fetchTasks().catch(err => {
      console.error('Error fetching tasks in Home', err);
      toast.error('Failed to fetch your tasks. Please try again later.');
    });
  }, [fetchTasks]);

  const scrollToTasks = () => {
    if (taskTableRef.current) {
      taskTableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main">
      <div className="top-left">
        <FourQuadrants
          tasks={tasks}
          setTask={(newTasks) => {
            // update via store
            useGlobalStore.getState().setTasksLocally(newTasks);
          }}
          hideTable={hideTable}
          setHideTable={setHideTable}
          setQtasks={(newQ) => useGlobalStore.getState().setQTasksLocally(newQ)}
        />
      </div>
      <div className="top-right">
        <TaskCount tasks={tasks} setFilterStatus={setFilterStatus} scrollToTasks={scrollToTasks} />
      </div>

      <div className="task-tables-container">
        <div className="home-task-wrapper">
          <div className="main-tasks-table" ref={taskTableRef}>
            {hideTable && (
              <div className="bottom-row">
                <TaskReport tasks={tasks} setTask={(newTasks) => useGlobalStore.getState().setTasksLocally(newTasks)} filterStatus={filterStatus} />
              </div>
            )}
          </div>
        </div>

        <div className="home-task-wrapper">
          <div className="quick-tasks-table">
            {hideTable && (
              <div className="bottom-row">
                <QtaskReport qtasks={qtasks} setQtasks={(newQ) => useGlobalStore.getState().setQTasksLocally(newQ)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
