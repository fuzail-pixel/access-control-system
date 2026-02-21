import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');

    const fetchTasks = async () => {
        try {
            const res = await axios.get('/api/v1/tasks');
            setTasks(res.data);
        } catch (err) {
            setError('Failed to fetch tasks.');
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`/api/v1/tasks/${editingId}`, { title, description, completed });
            } else {
                await axios.post('/api/v1/tasks', { title, description, completed });
            }
            setTitle('');
            setDescription('');
            setCompleted(false);
            setEditingId(null);
            fetchTasks();
        } catch (err) {
            setError('Failed to save task.');
        }
    };

    const handleEdit = (task) => {
        setEditingId(task.id);
        setTitle(task.title);
        setDescription(task.description);
        setCompleted(task.completed);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/v1/tasks/${id}`);
            fetchTasks();
        } catch (err) {
            setError('Failed to delete task.');
        }
    };

    return (
        <div>
            <h3>Tasks</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleAddOrUpdate}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <label>
                    Completed:
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={e => setCompleted(e.target.checked)}
                    />
                </label>
                <button type="submit">{editingId ? 'Update' : 'Add'} Task</button>
                {editingId && <button type="button" onClick={() => {
                    setEditingId(null); setTitle(''); setDescription(''); setCompleted(false);
                }}>Cancel</button>}
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <b>{task.title}</b> - {task.description} [{task.completed ? 'Done' : 'Pending'}]
                        <button onClick={() => handleEdit(task)}>Edit</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
