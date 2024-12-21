
import { useEffect, useState } from 'react'
import Button from './components/Button'
import Input from './components/input'
import TaskList from './components/TaskList'
import { addTask, getAllTasks } from './api/taskApi'

function App() {
  const [task, setTask] = useState("");


  useEffect(async () => {
    try {
      const data = await getAllTasks()
      if (data) {
       // add in state using redux
      }
    } catch (error) {
      console.log(error);
      
    }
  }, [addTask])

  const addTask = async () => {
    try {
      if (task === "") {
        console.log("Please write task");
      } else {
        const data = await addTask(task)
        if (data) {
          setTask("")
          // add in state using redux
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='p-80'>
      <div className='flex'>
        <Input task={task} setTask={setTask} />
        <Button/>
      </div>
      <TaskList/>
    </div>
  )
}

export default App
