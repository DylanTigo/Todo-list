const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  start: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { 
    type: String, 
    enum: ['Ongoing', 'Done', 'Waiting'],
    default: 'Ongoing'
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Task', TaskSchema);