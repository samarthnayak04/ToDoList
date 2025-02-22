import React, { useState } from "react";

export default function Todolist() {
  const [tasks, setTasks] = useState(["Gym", "Buy Groceries", "eat breakfast"]);
  const [newTask, setNewTask] = useState("");

  function InputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  return (
    <div className="todoList">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={InputChange}
        />
        <button className="addButton" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li className="sep" key={index}>
            <span className="text">{task}</span>
            <button className="delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move" onClick={() => moveUp(index)}>
              Up
            </button>
            <button className="move" onClick={() => moveDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
