import { useState } from 'react';
import Toast from '../../components/Toast/Toast';
import './UserManagement.css';

const initialUsers = [
  { id: 1, name: 'Sucharitha', email: 'sucharitha@conzura.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Ashwitha', email: 'ashwitha@conzura.com', role: 'Editor', status: 'Active' },
];

const roles = ['Admin', 'Editor', 'Viewer'];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Viewer' });
  const [toast, setToast] = useState(null);

  function handleAddUser(e) {
    e.preventDefault();
    setUsers([...users, { id: Date.now(), ...newUser, status: 'Invited' }]);
    setToast(`Invitation sent to ${newUser.email}`);
    setNewUser({ name: '', email: '', role: 'Viewer' });
    setShowModal(false);
  }

  function handleRoleChange(id, newRole) {
    setUsers(users.map(u => u.id === id ? { ...u, role: newRole } : u));
  }

  function handleRemove(id) {
    setUsers(users.filter(u => u.id !== id));
  }

  return (
    <div className="cz-um-page">
      <div className="cz-um-header">
        <div>
          <h1>User &amp; Role Management</h1>
          <p>Manage who has access to your organization and what they can do.</p>
        </div>
        <button className="cz-um-add-btn" onClick={() => setShowModal(true)}>+ Invite User</button>
      </div>

      <div className="cz-um-table-card">
        <table className="cz-um-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <select
                    value={u.role}
                    onChange={(e) => handleRoleChange(u.id, e.target.value)}
                    className="cz-role-select"
                  >
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </td>
                <td>
                  <span className={`cz-status-badge ${u.status === 'Active' ? 'cz-active' : 'cz-invited'}`}>
                    {u.status}
                  </span>
                </td>
                <td>
                  <button className="cz-remove-btn" onClick={() => handleRemove(u.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="cz-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="cz-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Invite User</h2>
            <form onSubmit={handleAddUser}>
              <label>Full Name</label>
              <input
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                placeholder="Enter name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                placeholder="Enter email"
                required
              />
              <label>Role</label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                {roles.map(r => <option key={r} value={r}>{r}</option>)}
              </select>

              <div className="cz-modal-actions">
                <button type="button" className="cz-cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="cz-invite-btn">Send Invite</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {toast && <Toast message={toast} type="success" onClose={() => setToast(null)} />}
    </div>
  );
}