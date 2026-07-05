import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className="cz-auth-page">
      <div className="cz-auth-left">
        <div className="cz-auth-logo">
          <div className="cz-logo-icon">🛡️</div>
          <span>CONZURA Sign</span>
        </div>
        <h1 className="cz-auth-heading">Get started with<br />secure e-signatures</h1>
        <p className="cz-auth-subtext">
          Create your free account and start sending documents for signature in minutes.
        </p>
        <ul className="cz-auth-features">
          <li>✔ Legally valid digital signatures</li>
          <li>✔ End-to-end workflow automation</li>
          <li>✔ Enterprise-grade security</li>
        </ul>
      </div>

      <div className="cz-auth-right">
        <div className="cz-auth-card">
          <h2>Create your account</h2>
          <p className="cz-auth-card-subtext">Sign up to start managing your documents</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            <button type="submit" className="cz-signin-btn">SIGN UP</button>
          </form>

          <p className="cz-signup-footer">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}