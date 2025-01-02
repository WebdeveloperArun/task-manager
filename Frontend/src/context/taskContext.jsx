import { createContext, useState } from 'react';

export const TaskContext = createContext(); 

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTaskToContext = (task) => {
     setTasks((prevTasks) => [...prevTasks, task]);
    };
    
    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task, index) => index !== taskId));
    };

    return (
     <TaskContext.Provider
      value={{ tasks, addTaskToContext, removeTask, setTasks }}
     >
      {children}
     </TaskContext.Provider>
    );
};