import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Settings from '../pages/Settings/Settings';
import Signup from '../pages/Signup/Signup';
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}