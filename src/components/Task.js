import "./Task.css";

export default function Task(props) {
    return (
        <li className="task" onClick={() => props.toggleTask(props.index)} 
            style={{textDecoration: props.completed ? "line-through" : "none"}}>
            {props.text}
        </li>
    )
}