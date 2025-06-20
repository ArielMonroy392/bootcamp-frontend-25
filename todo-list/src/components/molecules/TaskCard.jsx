import Button from "../atoms/Button";
import CheckBox from "../atoms/CheckBox";
import "./TaskCard.css"

export default function TaskCard({ task, onComplete, onEdit, onDelete }) {

  return (
    <div className="card" >
      <CheckBox value={task.isCompleted} onChange={(e)=>{onComplete(task,e)}}></CheckBox>
      <span style={{textDecoration: task.isCompleted ? "line-through" : ''}}>{task.name}</span>
      {
        !task.isCompleted && (<>
          <Button onClick={() => { onEdit(task) }}>Edit</Button>
          <Button onClick={() => { onDelete(task) }}>Delete</Button></>)
      }
    </div>
  )
}