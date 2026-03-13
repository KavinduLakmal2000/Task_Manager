package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.model.Task;
import com.example.service.TaskService;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService service;

    @PostMapping
    public ResponseEntity<String> addTask(@RequestBody Task task) {

        service.addTask(task);

        return ResponseEntity.ok("Task added!");
    }

    @GetMapping
    public List<Task> getAll() {

        return service.getAllTasks();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {

        service.deleteTask(id);

        return ResponseEntity.ok("Task deleted!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateTask(@PathVariable Long id, @RequestBody Task task) {

        service.updateTask(id, task);

        return ResponseEntity.ok("Task updated!");
    }

    @GetMapping("/search")
    public List<Task> searchTasks(@RequestParam String title) {
        return service.searchTasks(title);
    }
}