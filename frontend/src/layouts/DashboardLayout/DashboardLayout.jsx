import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './DashboardLayout.css';

export default function DashboardLayout() {
  return (
    <div className="cz-layout">
      <Sidebar />
      <div className="cz-main">
        <header className="cz-topbar">
          <div className="cz-brand">
            <span className="cz-brand-icon">🛡️</span>
            <span className="cz-brand-name">Sign</span>
          </div>

          <input className="cz-search" placeholder="Search" />

          <div className="cz-topbar-right">
            <div className="cz-org">CONZURA Sign ▾</div>
            <div className="cz-edition">
              <span>Free Edition</span>
              <a href="#">UPGRADE</a>
            </div>
            <span className="cz-icon">🔔</span>
            <div className="cz-avatar">S</div>
          </div>
        </header>

        <div className="cz-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}