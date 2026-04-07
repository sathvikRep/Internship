import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Add task
  const addTask = () => {
    if (task.trim() === "") return;

    setTaskList([...taskList, task]);
    setTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };

  return (
    <div className="app">
      <h1>📝 Task List App</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;