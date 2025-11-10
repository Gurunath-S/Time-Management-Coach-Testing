// src/ProtectedRoutes.jsx
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Home from './components/Home/Home';
import HelpPage from './components/HelpPage/HelpPage';
import LoginPage from './components/LoginPage/LoginPage';
import QuickTaskForm from './components/TaskForm/QuickTaskForm';
import QuickTaskHistory from './components/QtaskHistory/QuickTaskHistory';
import EditPriorityTags from './components/EditTags/EditTags';
import EditTaskPage from './components/EditTask/EditTask';
import FocusSummary from './components/FourQuadrants/FocusSummary';
import NavComponent from './components/Nav/Nav';
import useGlobalStore from './store/useGlobalStore';
import { toast } from 'react-toastify';

export default function ProtectedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const toastShownRef = useRef(false);
  const { isLoggedIn, isFocusMode } = useGlobalStore();

  useEffect(() => {
    const allowedPatterns = [
      /^\/edit-tasks\/[^/]+$/,
      /^\/focus-summary$/,
    ];
    const isAllowed = allowedPatterns.some((p) => p.test(location.pathname));

    if (isFocusMode && !isAllowed && location.pathname !== '/home'){
      if (!toastShownRef.current) {
        toast.warn('Navigation disabled in Focus Mode', { toastId: 'focus-mode-warning' });
        toastShownRef.current = true;
      }
      navigate('/home', { replace: true });
    }

    if (!isFocusMode) {
      toastShownRef.current = false;
    }
  }, [location, isFocusMode, navigate]);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Home isLoggedIn={isLoggedIn} /> : <LoginPage />} />
      <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/time-log" element={<QuickTaskForm />} />
      <Route path="/quick-task-history" element={<QuickTaskHistory />} />
      <Route path="/edit-tags/:id" element={<EditPriorityTags />} />
      <Route path="/edit-tasks/:id" element={<EditTaskPage />} />
      <Route path="/focus-summary" element={<FocusSummary />} />
    </Routes>
  );
}
