import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="cz-dashboard-cards">
      <div className="cz-action-card">
        <div className="cz-action-icon">📤</div>
        <div className="cz-action-title">Send for signatures</div>
      </div>

      <div className="cz-action-card">
        <div className="cz-action-icon">✍️</div>
        <div className="cz-action-title">Sign yourself</div>
      </div>
    </div>
  );
}