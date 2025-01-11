export const getAllTasks = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/tasks", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        console.log("data in getAllTasks", data);
        return data;
    } catch (error) {
        console.error("Error in getAllTasks", error);
        throw error;
    }
};

export const addTask = async (task) => {
    try {
        console.log("task in addTask", task);
        const res = await fetch("http://localhost:3000/api/add-task", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({task}),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error in addTask", error);
        throw error;
    }
};

export const completeTask = async (taskId) => {
    try {
        const res = await fetch(`http://localhost:3000/api/complete-task/${taskId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error in completeTask", error);
        throw error;
    }
};

export const deleteTask = async (taskId) => {
    try {
        const res = await fetch(`http://localhost:3000/api/delete-task/${taskId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error in deleteTask", error);
        throw error;
    }
};

export const updateTask = async (newTask, taskId) => {
    try {
        const res = await fetch(`http://localhost:3000/api/update-task/${taskId}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({task: newTask}),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error in updateTask", error);
        throw error;
    }
};
