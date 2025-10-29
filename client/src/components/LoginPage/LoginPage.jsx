import { useEffect, useCallback, useState, useRef } from 'react';
import './LoginPage.css';
import illustration from '../../assets/login-illustration.svg';
import ibtLogo from '../../assets/ibt-logo.png';
import tech4uLogo from '../../assets/tech4u-logo.webp';
import { useNavigate } from 'react-router-dom';
import BACKEND_URL from '../../../Config';

function LoginPage({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initRef = useRef(false); // guard to prevent double init

  const handleCredentialResponse = useCallback(async (response) => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/google-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: response.credential }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);

        if (onLoginSuccess) {
          const ok = await onLoginSuccess(); // verifies token with backend
          if (ok) {
            navigate('/home');
          } else {
            // verification failed
            localStorage.removeItem('token');
            navigate('/login');
          }
        } else {
          navigate('/home');
        }
      } else {
        console.error('Login failed:', data.message);
        // optionally show a toast
      }
    } catch (err) {
      console.error('Error during login:', err);
    } finally {
      setLoading(false);
    }
  }, [navigate, onLoginSuccess]);

  useEffect(() => {
    // If token exists, validate it via onLoginSuccess instead of blind navigate
    const token = localStorage.getItem('token');
    if (token && onLoginSuccess) {
      (async () => {
        setLoading(true);
        const ok = await onLoginSuccess();
        setLoading(false);
        if (ok) navigate('/home');
        else localStorage.removeItem('token');
      })();
      return;
    }

    // init Google sign-in once
    if (initRef.current) return;
    initRef.current = true;

    const initGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById('google-signin'),
          { theme: 'outline', size: 'large', width: '300' }
        );

        // Prompt can be intrusive; comment out if not wanted or call it conditionally.
        window.google.accounts.id.prompt();
      }
    };

    // If you included the script in index.html, it may already be available:
    if (window.google && window.google.accounts) {
      initGoogleSignIn();
    } else {
      // otherwise, dynamically add script (safe fallback)
      const scriptId = 'google-signin-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.id = scriptId;
        script.onload = initGoogleSignIn;
        document.body.appendChild(script);
      } else {
        initGoogleSignIn();
      }
    }
  }, [handleCredentialResponse, navigate, onLoginSuccess]);

  return (
    <div className="login-container">
      <div className="illustration">
        <img src={illustration} alt="Login Illustration" />
      </div>
      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <p>Login using your Google Account to continue</p>
        <div id="google-signin" className="google-signin"></div>
        {loading && <p>Signing in...</p>}
      </div>
        <div className="marketing-section-cards">
        <h3 className="marketing-heading">Empowering Growth & Smarter Decisions</h3>
        <div className="cards-container">
          <div className="info-card">
            <div className="ibt">
              <h4>I BACUS TECH SOLUTIONS PVT. LTD.</h4>
              <p>
                <strong>I BACUS TECH</strong> is a leading digital transformation company based in India,
                driving innovation across industries worldwide — from startups to Fortune 500s. Our solutions span AI automation,
                mobile apps, and cloud optimization, helping businesses unlock their full potential in a fast-moving digital world.
              </p>
              <a href="https://www.ibacustech.com/" target="_blank" rel="noopener noreferrer">
                <img src={ibtLogo} alt="Ibacus Logo" className="company-logo" />
              </a>
            </div>
          </div>

          <div className="info-card">
            <h4>TechCoach4U - Make Smarter Decisions, Every Day</h4>
            <p>
              <strong>TechCoach4U</strong> is a thoughtfully designed decision-support app developed by I BACUS TECH.
              It helps users think critically, make confident decisions, and build long-term habits through structured guidance.
            </p>
            <a href="https://decisioncoach.onrender.com/" target="_blank" rel="noopener noreferrer">
              <img src={tech4uLogo} alt="TechCoach4U Logo" className="company-logo" />
            </a>
            <br />
            <p><strong>Benefits:</strong></p>
            <ul>
              <li>Build better habits with structured decision-making tools</li>
              <li>Improve clarity by breaking down complex choices</li>
              <li>Reflect on past decisions to grow your mindset</li>
              <li>Ideal for students, professionals, and personal growth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
