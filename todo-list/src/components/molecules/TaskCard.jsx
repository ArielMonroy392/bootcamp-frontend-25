import Button from "../atoms/Button";
import CheckBox from "../atoms/CheckBox";
import "./TaskCard.css"

export default function TaskCard  ({ task, onEdit, onDelete }) {

  
  return (
    <div className="card" >
      <CheckBox ></CheckBox>
      <span>{task.name}</span>
      <Button onClick={() => { onEdit(task)}}>Edit</Button>
      <Button onClick={() => { onDelete(task)}}>Delete</Button>
    </div>
  )
}