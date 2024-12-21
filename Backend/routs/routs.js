import express from "express";
import getAllTasks from "../controllers/getAllTask.js";
import addTask from "../controllers/addTask.js";
import deleteTask from "../controllers/deleteTask.js";
import updateTask from "../controllers/updateTask.js";
import completeTask from "../controllers/completeTask.js";


const router = express.Router();


router.get("/tasks", getAllTasks);
router.post("/add-task", addTask);
router.get("/delete-task/:id", deleteTask);
router.post("/update-task/:id", updateTask);
router.get("/complete-task/:id", completeTask);


export default router;





