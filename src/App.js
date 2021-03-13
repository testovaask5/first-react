import React, { useEffect, useState } from 'react'
import NewTask from './components/NewTask';
import Task from './components/Task';
import TasksList from './components/TasksList';

export default function App() {
  // const initTasks = [{ text: 'Task 1', completed: false },
  //   { text: 'Task 2', completed: true },
  //   { text: 'Task 3', completed: true }];
  
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('/api/tasks').then(response => {
      return response.json()
    }).then(tasksFromServer => {
      setTasks(tasksFromServer)
      console.log(tasksFromServer);
    }).catch(console.error)
  }, [])

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {    
    const newTasks = tasks.map((task) => {
      if (task.id === id) return ({
        ...task, 
        completed: !task.completed
      })
      return task
    })
    setTasks(newTasks)
    const updatedTask = newTasks.find(task => task.id === id)
    console.log('updatedTask: ');
    console.log(updatedTask);
    fetch('/api/task/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    }).then(response => response.json())
    .then(console.log)
  }

  const removeTask = (id) => {
    fetch('/api/task/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(response => {
      console.log(response);
      setTasks(tasks.filter((task) => task.id !== id ))
    })
  }

  const TaskEmbeded = (task) => {
    return <Task 
      key={task.id}
      toggleTask={toggleTask}
      removeTask={removeTask}
      {...task} />
  }

  return (
    <div style={
      { maxWidth: 600, minWidth: 300, margin: "0 auto" }
    }>
      <NewTask addNewTask={addNewTask} />
      <TasksList tasks={tasks}>
        {TaskEmbeded}
      </TasksList>
    </div>
  )
}
