import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "../App.css";

function Todo({ todo, toggleComplete, removeTodo, className, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(todo.task);

  function handleCheckboxClick() {
    toggleComplete(todo.id);
    setTimeout(() => {
      removeTodo(todo.id);
    }, 2000);
  }

  const handleEditing = () => {
    setEditing(true);
  };

  return (
    <div
      className={` border rounded items-center todo-item border-black flex gap-2 p-4 bg-${todo.color}-400`}
    >
      <input
        id="inpt"
        type="checkbox"
        className={`accent-black`}
        onClick={handleCheckboxClick}
      />

      {editing ? (
        <input
          className="todo-edit "
          onChange={(e) => setInput(e.target.value)}
          onBlur={() => {
            editTodo({ ...todo, task: input });
            setEditing(false);
          }}
          onSubmit={() => {
            editTodo({ ...todo, task: input });
            setEditing(false);
          }}
        />
      ) : (
        <div
          className="todo-text"
          style={{
            color: "black",
            textDecoration: todo.completed ? "line-through" : null,
          }}
        >
          <div onDoubleClick={handleEditing}>{todo.task}</div>
        </div>
      )}
    </div>
  );
}

export default Todo;
