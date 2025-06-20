import {  useRef, useReducer } from 'react';
import './App.css';
import Input from './components/atoms/Input';
import Button from './components/atoms/Button';
import TaskCard from './components/molecules/TaskCard';

function tasksReducer(tasks, action) {
  if (action.type === 'add') {
    return [...tasks, { id: action.id, name: action.name, isEditing: action.isEditing, isCompleted: action.isCompleted  }]
  }
  if (action.type === 'edit') {
    console.log(action)
    return tasks.map((t) => (t.id === action.task.id ? action.task : t))
  }
  if (action.type === 'delete') {
    return tasks.filter((t) => t.id !== action.id)
  }
  if (action.type === 'complete') {
    return tasks.map((t) => {
      if (t.id === action.id) t.isCompleted = action.value
      return t
    })
  }
  if (action.type === 'setEditing') {
    return tasks.map((t) => {
      if (t.id === action.id) t.isEditing = true
      return t
    })
  }
  throw new Error("Unknown type")
}


function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, [])
  // const [selectedTask, setSelectedTask] = useState(null);
  const inputRef = useRef(null);

  const addTask = (name) => {
    dispatch({
      type: 'add',
      id: Math.random(),
      name: name,
      isCompleted: false,
      isEditing: false,
    })
  };

  const editTask = (task) => {
    dispatch({
      type: 'edit',
      task: task
    })
  };

  const submitTask = () => {
    const value = inputRef.current?.value;
    if (!isValidTask(value)) {
      alert("Not valid task");
      return;
    }
    const editingTask = tasks.find((t) => t.isEditing)
    console.log(editingTask)
    if (editingTask) {
      editTask({ ...editingTask, name: value, isEditing: false });
    } else {
      addTask(value);
    }
    clearInput();
  };

  const handleEditTask = (task) => {
    dispatch({type: "setEditing", id: task.id})
    if (inputRef.current) inputRef.current.value = task.name;
  };

  const handleDeleteTask = (task) => {
    dispatch({
      type: 'delete',
      id: task.id
    })
  };

  const handleCompleted = (task, value) => {
    dispatch({
      type: 'complete',
      id: task.id,
      value: value
    })
  }


  const isValidTask = (value) => {
    return value !== "";
  };

  const clearInput = () => {
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <>
      <h1>Todo List</h1>
      <div style={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
        <div style={{ display: 'flex', gap: "10px" }}>
          <Input placeholder="New Task" ref={inputRef} />
          <Button onClick={submitTask}>
            Submit
          </Button>
         
        </div>
      </div>
      <ul style={{ width: "100%", padding: 0 }}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={handleCompleted}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
