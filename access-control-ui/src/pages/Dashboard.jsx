import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeToken, getUserFromToken } from '../auth/auth';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = getUserFromToken();

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    };

    if (!user) {
        // Not logged in, redirect to login
        navigate('/login');
        return null;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, <b>{user.sub}</b>!</p>
            <p>Role: <b>{user.role}</b></p>
            <button onClick={handleLogout}>Logout</button>
            {/* You can add <TaskList /> here for task management */}
        </div>
    );
};

export default Dashboard;
