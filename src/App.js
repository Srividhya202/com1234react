import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import AgentDashboard from './pages/AgentDashboard';
import ClientDashboard from './pages/ClientDashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Header isAuthenticated={!!user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={!!user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin-dashboard"
          element={user?.role === 'admin' ? <AdminDashboard /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/agent-dashboard"
          element={user?.role === 'agent' ? <AgentDashboard /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/client-dashboard"
          element={user?.role === 'client' ? <ClientDashboard /> : <Login onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;