import { useEffect } from 'react';
import './Toast.css';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`cz-toast cz-toast-${type}`}>
      <span>{type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️'}</span>
      <span>{message}</span>
      <button onClick={onClose}>✕</button>
    </div>
  );
}