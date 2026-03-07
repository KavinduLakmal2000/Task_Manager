package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Task;
import com.example.repository.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repo;

    public Task addTask(Task task){
        return repo.save(task);
    }

    public List<Task> getAllTasks(){
        return repo.findAll();
    }

    public void deleteTask(Long id){
        repo.deleteById(id);
    }

    public Task updateTask(Long id, Task task){

        Task existing = repo.findById(id)
            .orElseThrow(() -> new RuntimeException("Task not found"));

        existing.setTitle(task.getTitle());
        existing.setDescription(task.getDescription());
        existing.setStatus(task.getStatus());

        return repo.save(existing);
    }
}