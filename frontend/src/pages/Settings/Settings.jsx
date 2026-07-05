import { useState } from 'react';
import UserManagement from '../UserManagement/UserManagement';
import './Settings.css';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="cz-settings-page">
      <h1>Settings</h1>

      <div className="cz-settings-tabs">
        <button
          className={activeTab === 'general' ? 'cz-tab-active' : ''}
          onClick={() => setActiveTab('general')}
        >
          General
        </button>
        <button
          className={activeTab === 'users' ? 'cz-tab-active' : ''}
          onClick={() => setActiveTab('users')}
        >
          Users & Roles
        </button>
        <button
          className={activeTab === 'security' ? 'cz-tab-active' : ''}
          onClick={() => setActiveTab('security')}
        >
          Security
        </button>
      </div>

      <div className="cz-settings-content">
        {activeTab === 'general' && (
          <p className="cz-settings-placeholder">General organization settings go here.</p>
        )}
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'security' && (
          <p className="cz-settings-placeholder">Security & authentication settings go here.</p>
        )}
      </div>
    </div>
  );
}