// Nav.jsx
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import { FiHelpCircle } from "react-icons/fi";
import { FaHome } from 'react-icons/fa';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { TbLogin2 } from "react-icons/tb";
import ibtLogo from '../../assets/ibt-logo.png';

function NavComponent({ user, loading, isLoggedIn, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/login');
    setShowProfile(false);
  };
  const showLoginLink = !user && !loading && location.pathname !== '/login';

  return (
     <Navbar collapseOnSelect expand="lg" className="custom-navbar" variant="dark">
      <><img src={ibtLogo} alt="Ibacus Logo" className="logo" /></>
      <Container>
        <Navbar.Brand as={Link} to="/home" className="brand-title">📝 Time Management Coach</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* show home link if user exists */}
            {loading ? (
              <span className="nav-loading">...</span>
            ) : isLoggedIn && user ? (
              <Nav.Link as={Link} to="/home" className="nav-link-custom"><FaHome /> Home</Nav.Link>
            ) : (
              // if no user and not on login page, show the login link
              showLoginLink && (
                <Nav.Link as={Link} to="/login" className="nav-link-custom"><TbLogin2 /> Login</Nav.Link>
              )
            )}

            <Nav.Link as={Link} to="/help" className="nav-link-custom"><FiHelpCircle /> Help</Nav.Link>

            {user && (
              <>
                <div className="nav-profile" onClick={() => setShowProfile(!showProfile)}>
                  <img
                    src={`data:image/jpeg;base64,${user.picture}`}
                    alt="User"
                    className="nav-avatar"
                  />
                </div>

                {showProfile && (
                  <div className="profile-dropdown">
                    {user?.picture && (
                      <img src={`data:image/jpeg;base64,${user.picture}`} alt="Profile" className="profile-img" />
                    )}
                    <p className="profile-name">{user.name}</p>
                    <p className="profile-email">{user.email}</p>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    <button className="close-btn" onClick={() => setShowProfile(false)}>close</button>
                  </div>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;


