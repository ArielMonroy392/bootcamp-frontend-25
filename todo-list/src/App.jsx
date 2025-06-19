import { useState, useRef } from 'react';
import './App.css';
import Input from './components/atoms/Input';
import Button from './components/atoms/Button';
import TaskCard from './components/molecules/TaskCard';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const inputRef = useRef(null);

  const isValidTask = (value) => {
    return value !== "";
  };

  const addTask = (name) => {
    setTasks((prev) => [...prev, { id: Math.random(), name }]);
  };

  const editTask = (name) => {
    const updatedTask = { id: selectedTask.id, name };
    setTasks((prev) =>
      prev.map((task) => (task.id === selectedTask.id ? updatedTask : task))
    );
    setSelectedTask(null);
  };

  const clearInput = () => {
    if (inputRef.current) inputRef.current.value = "";
  };

  const submitTask = () => {
    const value = inputRef.current?.value;
    if (!isValidTask(value)) {
      alert("Not valid task");
      return;
    }

    if (selectedTask) {
      editTask(value);
    } else {
      addTask(value);
    }

    clearInput();
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    if (inputRef.current) inputRef.current.value = task.name;
  };

  const handleDeleteTask = (task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    if (selectedTask?.id === task.id) {
      setSelectedTask(null);
      clearInput();
    }
  };

  const handleCancelEdition = () => {
    setSelectedTask(null)
    clearInput()
  }

  return (
    <>
      <h1>Todo List</h1>
      <div style={{display: 'flex', flexDirection: 'column', width: "100%"}}>
        <div style={{display: 'flex', gap: "10px"}}>
        <Input placeholder="New Task" ref={inputRef} />
        <Button onClick={submitTask}>
        {selectedTask ? "Edit" : "Add"}
      </Button>
        {
          selectedTask && <Button onClick={handleCancelEdition}>✖️</Button>
        }
        </div>
        
      {selectedTask && <span>You're editing task {selectedTask.name}</span>}
      </div>
      <ul style={{width: "100%", padding: 0}}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
