import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className="cz-auth-page">
      {/* LEFT PANEL */}
      <div className="cz-auth-left">
        <div className="cz-auth-logo">
          <div className="cz-logo-icon">🛡️</div>
          <span>CONZURA Sign</span>
        </div>

        <h1 className="cz-auth-heading">
          Secure document<br />signing made simple
        </h1>

        <p className="cz-auth-subtext">
          Conzura Sign is a secure digital signature and workflow automation
          platform. Send, sign, verify, and track documents with confidence.
        </p>

        <ul className="cz-auth-features">
          <li>✔ Legally valid digital signatures</li>
          <li>✔ End-to-end workflow automation</li>
          <li>✔ Enterprise-grade security</li>
        </ul>
      </div>

      {/* RIGHT PANEL */}
      <div className="cz-auth-right">
        <div className="cz-auth-card">
          <h2>Sign in to your account</h2>
          <p className="cz-auth-card-subtext">Welcome back! Please enter your details.</p>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
            />

            <label>Password</label>
            <div className="cz-password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <span
                className="cz-eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>

            <div className="cz-auth-row">
              <label className="cz-checkbox-label">
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password" className="cz-forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="cz-signin-btn">SIGN IN</button>
          </form>

          <p className="cz-signup-footer">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}