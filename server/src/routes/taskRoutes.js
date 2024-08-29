const express = require('express');
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth.auth, taskController.createTask);
router.get('/', auth.auth, taskController.getTasks);
router.put('/:id', auth.auth, taskController.updateTask);
router.delete('/:id', auth.auth, taskController.deleteTask);

module.exports = router;