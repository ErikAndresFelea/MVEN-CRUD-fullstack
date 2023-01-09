const express = require('express');
const { findByIdAndUpdate } = require('..\\models\\task');
const router = express.Router();

const Task = require('..\\models\\task');

// Get all taks from db
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Post a task
router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({ status: 'Task saved' });
});

// Update a task by id
router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'Task updated' });
});

// Delete a task by id
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({ status: 'Task deleted' });
});

// Export the routes
module.exports = router;