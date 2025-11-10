// src/App.jsx
import './App.css';
import NavComponent from './components/Nav/Nav';
import ProtectedRoutes from './ProtectedRoutes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useGlobalStore from './store/useGlobalStore';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function App() {
  const { user, isLoggedIn, loadingAuth, authChecked, initApp, logout } = useGlobalStore();

  useEffect(() => {
    // bootstrap auth + tasks + focus
    initApp();
    // listen to global logout
    const onLogout = () => {
      // already handled in store.logout but keep compatibility with old code
    };
    window.addEventListener('logout', onLogout);
    return () => window.removeEventListener('logout', onLogout);
  }, [initApp]);

  if (!authChecked) {
    return <div style={{ padding: 50, textAlign: 'center' }}>Checking session...</div>;
  }

  return (
    <BrowserRouter>
      <NavComponent user={user} loading={loadingAuth} isLoggedIn={isLoggedIn} onLogout={logout} />
      <br />
      <ProtectedRoutes />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
