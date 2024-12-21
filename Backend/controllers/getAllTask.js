import Task from "../models/task.model.js";

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        if (tasks == []) {
            res.json(tasks);
        } else {
            res.status(404).json({ message: "No tasks found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default getAllTasks