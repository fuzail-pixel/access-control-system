package com.example.accesscontrol.repository;

import com.example.accesscontrol.entity.Task;
import com.example.accesscontrol.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByUser(User user);
}
