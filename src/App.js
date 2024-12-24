import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentFormPage from './pages/StudentForm';
import Home from './pages/Home';
import ProtectedRoute from "./utils/ProtectedRoute";
import ScholarPage from './pages/ScholarPage';
import SupportPage from "./pages/Support";
import AdminPanel from './pages/admin/Admin';
import AdminLogin from './pages/admin/Login';
import LinksPage from "./pages/admin/Links";
import AdminSupport from "./pages/admin/AdminSupport";
import './custom.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/student-form" element={<StudentFormPage />} />
        <Route path="/scholarship" element={<ScholarPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-support" element={<AdminSupport />} />
        <Route path="/links" element={<LinksPage />} />

        {/* Protected Routes */}
        <Route
          path="/admin-panel"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
