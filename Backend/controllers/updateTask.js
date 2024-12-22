import Task from "../models/task.model.js";




const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = req.body;
        const updatedTask = await Task.findByIdAndUpdate(taskId, task, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
         res.status(400).json({ message: error.message });
    }
};

export default updateTask;