'use strict';
const express = require('express'); 

const {
  getAllTasks, 
  createTask, 
  getTaskById, 
  editTaskById, 
  deleteTaskById } = require('../controllers/tasksController');

  const router = express.Router(); 
//  HTTP verbs for each route
router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.get('/tasks/:taskId', getTaskById); 
router.put('/tasks/:taskId', editTaskById); 
router.delete('/tasks/:taskId', deleteTaskById); 

module.exports = router;