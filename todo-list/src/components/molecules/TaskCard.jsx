import { useState } from "react";
import Button from "../atoms/Button";
import CheckBox from "../atoms/CheckBox";
import "./TaskCard.css"

export default function TaskCard({ task, onEdit, onDelete }) {
  const [isDone, setIsDone] = useState(false)

  return (
    <div className="card" >
      <CheckBox value={isDone} onChange={setIsDone}></CheckBox>
      <span style={{textDecoration: isDone ? "line-through" : ''}}>{task.name}</span>
      {
        !isDone && (<>
          <Button onClick={() => { onEdit(task) }}>Edit</Button>
          <Button onClick={() => { onDelete(task) }}>Delete</Button></>)
      }
    </div>
  )
}