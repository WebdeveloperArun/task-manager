import { useContext, useEffect, useState } from "react";
import Button from "./components/Button";
import Input from "./components/input";
import TaskList from "./components/TaskList";
import { addTask, getAllTasks } from "./api/taskApi";
import { TaskContext } from "./context/taskContext";

function App() {
 const { tasks, addTaskToContext, setTasks } = useContext(TaskContext);
 const [inputTask, setInputTask] = useState("");

 useEffect(() => {
  async function fetchData() {
   try {
    const data = await getAllTasks();
    if (data) {
     setTasks(data);
     // add in state using context
    }
   } catch (error) {
    console.log(error);
   }
  }
  fetchData();
 }, []);

 const addTaskLocal = async () => {
  try {
   if (inputTask === "") {
    console.log("Please write task");
   } else {
    
    const data = await addTask(inputTask);
    console.log("data in addTaskLocal", data);

    if (data) {
     addTaskToContext(data);
     setInputTask("");
     // add in state using context
    }
   }
  } catch (error) {
   console.log(error);
  }
 };

 return (
  <div className="p-80">
   <div className="flex">
    <Input inputTask={inputTask} setInputTask={setInputTask} />
    <Button addTask={addTaskLocal} />
   </div>
   <TaskList tasks={tasks} />
  </div>
 );
}

export default App;
