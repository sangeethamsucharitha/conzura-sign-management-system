import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="cz-sidebar">
      <nav className="cz-nav">
        <NavLink to="/dashboard" className="cz-nav-item">
          <span className="cz-nav-icon">📝</span>
          <span>Sign</span>
        </NavLink>
        <NavLink to="/documents" className="cz-nav-item">
          <span className="cz-nav-icon">📄</span>
          <span>Documents</span>
        </NavLink>
        <NavLink to="/templates" className="cz-nav-item">
          <span className="cz-nav-icon">📋</span>
          <span>Templates</span>
        </NavLink>
        <NavLink to="/signforms" className="cz-nav-item">
          <span className="cz-nav-icon">🔗</span>
          <span>SignForms</span>
        </NavLink>
        <NavLink to="/reports" className="cz-nav-item">
          <span className="cz-nav-icon">📊</span>
          <span>Reports</span>
        </NavLink>
        </nav>
        <div className="cz-nav-bottom">
        <NavLink to="/settings" className="cz-nav-item">
          <span className="cz-nav-icon">⚙️</span>
          <span>Settings</span>
        </NavLink>
        <button className="cz-add-btn">+</button>
        <NavLink to="/usage" className="cz-nav-item">
          <span className="cz-nav-icon">📈</span>
          <span>Usage</span>
        </NavLink>
      </div>
    </aside>
  );
}