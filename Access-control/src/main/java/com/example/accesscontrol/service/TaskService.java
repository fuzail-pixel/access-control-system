package com.example.accesscontrol.service;

import com.example.accesscontrol.entity.Task;
import com.example.accesscontrol.entity.User;
import com.example.accesscontrol.repository.TaskRepository;
import com.example.accesscontrol.repository.UserRepository;
import com.example.accesscontrol.entity.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    private User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<Task> getAllTasks() {
        User user = getCurrentUser();
        if (user.getRole() == Role.ADMIN) {
            return taskRepository.findAll();
        } else {
            return taskRepository.findByUser(user);
        }
    }

    public Task getTaskById(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        if (!task.getUser().getId().equals(getCurrentUser().getId())) {
            throw new RuntimeException("Access denied");
        }
        return task;
    }

    public Task createTask(Task task) {
        task.setUser(getCurrentUser());
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task task = getTaskById(id);
        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setCompleted(updatedTask.isCompleted());
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        Task task = getTaskById(id);
        taskRepository.delete(task);
    }
}
