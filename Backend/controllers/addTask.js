import Task from "../models/task.model.js";

const addTask = async (req, res) => {
 try {
    console.log(req.body);
    
  const newTask = new Task(req.body);
  const savedTask = await newTask.save();
  res.status(201).json(savedTask);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export default addTask;
