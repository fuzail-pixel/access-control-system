import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TaskList from './components/TaskList';
import { isLoggedIn } from './auth/auth';

const PrivateRoute = ({ children }) => {
    return isLoggedIn() ? children : <Navigate to="/login" />;
};

const App = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                        <TaskList />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    </Router>
);

export default App;
