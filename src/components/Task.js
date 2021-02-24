export default function Task(props) {
    return <li style={{textDecoration: props.completed ? "line-through" : "none"}}>{props.text}</li>
}