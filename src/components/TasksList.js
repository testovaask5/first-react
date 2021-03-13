import { List } from "@material-ui/core"

export default function TasksList(props) {
  return (
    <List component="ul">
      {props.tasks.map((task) => {
        return props.children(task)
      })}
    </List>
  )
}