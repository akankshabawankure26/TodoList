import React, { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTask.trim()) {
      editTodo(todo.id, newTask);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTask(todo.task);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <input className="check-box"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
