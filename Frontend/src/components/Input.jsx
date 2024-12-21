import React from "react";

const Input = (task, setTask) => {
 return (
  <div class="mb-6 w-full">
   <input
    type="text"
    value={task}
    id="default-input"
    onClick={() => setTask(e.target.value)}
    placeholder="write your task"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   />
  </div>
 );
};

export default Input;
