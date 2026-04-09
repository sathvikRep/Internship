import React, { useState } from "react";

function Tasks() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 Tasks Page</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

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

export default Tasks;