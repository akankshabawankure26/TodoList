import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        placeholder="Add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" >Add</button>
    </form>
  );
};

export default AddTodo;
