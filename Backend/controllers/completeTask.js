import Task from "../models/task.model.js";


const completeTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const completedTask = await Task.findByIdAndUpdate(taskId, { completed: true }, { new: true });
        res.status(200).json(completedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default completeTask;