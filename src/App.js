import React, { useState } from 'react'
import NewTask from './components/NewTask';
import TasksList from './components/TasksList';

export default function App() {
  const initTasks = [{ text: 'Task 1', completed: false },
    { text: 'Task 2', completed: true },
    { text: 'Task 3', completed: true }];

  const [tasks, setTasks] = useState(initTasks)

  const toggleTask = (index) => {    
      const newTasks = [...tasks]
      newTasks[index] = {
        ...newTasks[index], 
        completed: !newTasks[index].completed
      }
      setTasks(newTasks)
  }

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }
  return (
    <div style={
      { maxWidth: 600, minWidth: 300, margin: "0 auto" }
    }>
      <NewTask addNewTask={addNewTask} />
      <TasksList tasks={tasks} toggleTask={toggleTask} />
    </div>
  )
}
