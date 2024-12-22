

export const getAllTasks = async () => {
    try {
        const res = await fetch("",{
            method: "GET"
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error in getAllTasks", error);
    }
}
export const addTask = async (task) => {
    try {
        const res = await fetch("", {
            method: "POST",
            body: JSON.stringify(task)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error in getAllTasks", error);
    }
}
export const completeTask = async (taskId) => {
    try {
        const res = await fetch("", {
            method: ""
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error in getAllTasks", error);
    }
}
export const deleteTask = async (taskId) => {
    try {
        const res = await fetch("", {
            method: ""
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error in getAllTasks", error);
    }
}
export const updateTask = async (newTask, taskId) => {
    try {
        const res = await fetch("", {
            method: ""
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error in getAllTasks", error);
    }
}