import { useState } from 'react';
import './NotificationPanel.css';

const sampleNotifications = [
  { id: 1, text: 'Ravi Kumar signed "Offer Letter.pdf"', time: '2 min ago' },
  { id: 2, text: 'Document "NDA_2026.pdf" is awaiting your signature', time: '1 hr ago' },
  { id: 3, text: 'Ashwitha invited you to Workflow "Vendor Onboarding"', time: 'Yesterday' },
];

export default function NotificationPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="cz-notif-wrapper">
      <span className="cz-icon" onClick={() => setOpen(!open)}>🔔</span>

      {open && (
        <div className="cz-notif-panel">
          <div className="cz-notif-header">Notifications</div>
          {sampleNotifications.map(n => (
            <div key={n.id} className="cz-notif-item">
              <div className="cz-notif-text">{n.text}</div>
              <div className="cz-notif-time">{n.time}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}