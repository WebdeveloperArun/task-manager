import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/taskContext";
import { completeTask, deleteTask, updateTask } from "../api/taskApi";

const TaskList = () => {
 const { tasks, removeTask, addTaskToContext, completeTaskContext, updateTaskInContext } =
  useContext(TaskContext);
 const [checkbox, setCheckbox] = useState({
  taskId: null,
 });
 const [editTaskId, setEditTaskId] = useState(null);
 const [editTaskValue, setEditTaskValue] = useState("");

 useEffect(() => {
  async function setCompleted() {
   if (checkbox.taskId !== null) {
    console.log("checkbox.taskId", checkbox.taskId);

    const todo = await completeTask(checkbox.taskId);
    if (todo) {
     console.log("todo", todo);
     completeTaskContext(todo._id);
     setCheckbox({ taskId: null });
    }
   }
   return;
  }
  setCompleted();
 }, [checkbox]);

 const deleteTaskHandler = async (todoId) => {
  const res = await deleteTask(todoId);
  if (res) {
   removeTask(todoId);
  }
 };

 const startEditing = (todo) => {
  setEditTaskId(todo._id);
  setEditTaskValue(todo.task);
 };

 const saveEditTask = async (todoId) => {
  const updatedTask = await updateTask(editTaskValue, todoId);
  console.log("updatedTask", updatedTask);
  
  if (updatedTask) {
   updateTaskInContext(updatedTask);
   setEditTaskId(null);
   setEditTaskValue("");
  }
 };

 return (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
   <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
     <tr>
      <th scope="col" className="p-4">
       <div className="flex items-center">
        <input
         id="checkbox-all-search"
         type="checkbox"
         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="checkbox-all-search" className="sr-only">
         checkbox
        </label>
       </div>
      </th>
      <th scope="col" className="px-6 py-3 border border-blue-400">
       Task
      </th>
      <th scope="col" className="px-6 py-3 border border-blue-400">
       Edit
      </th>
      <th scope="col" className="px-6 py-3 border border-blue-400">
       Delete
      </th>
     </tr>
    </thead>
    <tbody>
     {tasks &&
      tasks.map((todo, index) => (
       <tr
        key={index}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
       >
        <td className="w-4 p-4">
         <div className="flex items-center">
          <input
           id="checkbox-table-search-1"
           onChange={() => setCheckbox({ taskId: todo._id })}
           type="checkbox"
           defaultChecked={todo.completed}
           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
           checkbox
          </label>
         </div>
        </td>
        <th
         scope="row"
         className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${
          todo.completed ? "line-through" : ""
         }`}
        >
         {todo.task}
        </th>

        <td className="bg-gray-300 flex items-center px-6 py-4">
         {editTaskId === todo._id ? (
          <>
           <input
            type="text"
            value={editTaskValue}
            onChange={(e) => setEditTaskValue(e.target.value)}
            className="border rounded p-1"
           />
           <button
            onClick={() => saveEditTask(todo._id)}
            className="ml-2 text-blue-600"
           >
            Save
           </button>
          </>
         ) : (
          <button
           onClick={() => startEditing(todo)}
           className="font-medium text-blue-600 hover:underline"
          >
           Edit
          </button>
         )}
        </td>
        <td className="bg-slate-600 px-6 py-4">
         <button
          onClick={() => deleteTaskHandler(todo._id)}
          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
         >
          Remove
         </button>
        </td>
       </tr>
      ))}
    </tbody>
   </table>
  </div>
 );
};

export default TaskList;
