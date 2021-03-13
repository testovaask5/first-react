import { useState } from "react"
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  textfield: {
    marginRight: 10,
    flexGrow: 1
  }
})

export default function NewTask({ addNewTask }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("")

  function submitHandler(event) {
    event.preventDefault()
    if (inputValue === "") return;
    const newTask = {
      text: inputValue,
      completed: false
    }
    fetch('/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }).then(response => response.json())
    .then(response => {
      console.log(response)
      addNewTask(response)
      setInputValue('')
    })
  }
  
  return (
    <form className={classes.root} onSubmit={submitHandler}>
      <TextField 
        className={classes.textfield}
        label="Task text" 
        variant="outlined" 
        value={inputValue} 
        onChange={(event) => setInputValue(event.target.value)} 
      />
      <Button type="submit" variant="contained" color="primary">
        Add task
      </Button>
    </form>
  )
}