import axios from 'axios';
import { getToken } from '../auth/auth';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // Change if your backend runs elsewhere
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attach JWT token to every request if available
instance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;
