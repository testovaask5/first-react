import "./Task.css";
import { ListItem, ListItemText, Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginBottom: 10
  },
  listitem: {
    flexGrow: 1,
    
  }
})

export default function Task(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ListItem 
        className={classes.listitem}
        button
        onClick={() => props.toggleTask(props.index)}>
          <ListItemText 
            style={{ textDecoration: props.completed ? 
            "line-through" : "none" }} 
            primary={props.text} 
          />
      </ListItem>
      <Button variant="contained" color="secondary">
        Remove
      </Button>    
    </div>
  )
}