import React, { useState } from 'react';
import axios from '../api/axios';
import { setToken } from '../auth/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await axios.post('/api/v1/auth/login', { email, password });
            setToken(res.data.message); // JWT is in 'message'
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '16px' }}>
                    <button type="submit" style={{ width: '120px', marginBottom: '8px' }}>Login</button>
                    <button type="button" onClick={handleRegister} style={{ width: '120px' }}>
                        Sign Up / Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
