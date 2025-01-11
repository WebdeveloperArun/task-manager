import { createContext, useState } from 'react';

export const TaskContext = createContext(); 

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTaskToContext = (task) => {
     setTasks((prevTasks) => [...prevTasks, task]);
    };
    
    const removeTask = (taskId) => {
        console.log("taskId", taskId);
        
        setTasks((prev) => prev.filter(todo => todo._id != taskId))
    };
    const updateTaskInContext = (updatedTask) => {
     setTasks((prevTasks) =>
      prevTasks.map((task) =>
       task._id === updatedTask._id ? updatedTask : task
      )
     );
    };

    const completeTaskContext = (taskId) => {
        setTasks((prev) => prev.map((task) => {
            if (task._id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    return (
     <TaskContext.Provider
      value={{ tasks, addTaskToContext, removeTask, setTasks , completeTaskContext, updateTaskInContext}}
     >
      {children}
     </TaskContext.Provider>
    );
};