import React from 'react'

const Button = ({addTask, inputTask}) => {
  return (
   <div>
    <button
     type="button"
     onClick={() => addTask(inputTask)}
     className="text-white ml-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
     Add
    </button>
   </div>
  );
}

export default Button
