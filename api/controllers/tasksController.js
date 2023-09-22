'use strict';
const  mongoose = require('mongoose');
const Task = require('../models/tasksModel');

module.exports = {

// Retrieve all the tasks saved in the database
getAllTasks: async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (err) {
    res.status(400).send('error: ' + err.message);
  }
},



// Create a new task
createTask: async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).send(err);
  }
},

// Retrieve a task by taskId
getTaskById:  async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      res.status(404).json({
        description: `Couldn't find the requested taskId '${req.params.taskId}'`
      });
    } else {
      res.json(task);
    }
  } catch (err) {
    res.status(500).send(err);
  }
},


// Edit a task by taskId
editTaskById: async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.taskId },
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      res.status(404).json({
        description: `Couldn't find the requested taskId '${req.params.taskId}`
      });
    } else {
      res.json(updatedTask);
    }
  } catch (err) {
    res.status(500).send(err);
  }
},


// Delete a task by taskId
deleteTaskById: async (req, res) => {
  try {
    const result = await Task.deleteOne({ _id: req.params.taskId });
    if (result.deletedCount === 0) {
      res.status(404).json({
        description: `Couldn't find the requested taskId '${req.params.taskId}`
      });
    } else {
      res.status(204).json('Task successfully deleted');
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

}