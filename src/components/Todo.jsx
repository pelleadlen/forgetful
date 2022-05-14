import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "../App.css";

function Todo({ todo, toggleComplete, removeTodo, className, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(todo.task);

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  const handleEditing = () => {
    setEditing(true);
  };

  return (
    <div className={className}>
      <div
        className={`flex flex-col overflow-hidden p-6 rounded border border-black shadow-slate shadow-md mb-2 bg-${todo.color}-400`}
      >
        <CancelIcon
          sx={{
            width: `16px`,
            height: `16px`,
            color: `black`,
          }}
          className="self-end cancel"
          onClick={() => {
            handleRemoveClick();
          }}
        />

        <div className="flex items-center gap-2 ">
          <input
            type="checkbox"
            className=" h-6 w-6  mr-2 accent-black "
            onClick={handleCheckboxClick}
          />

          {editing ? (
            <input
              className="bg-inherit outline-none text-2xl font-medium "
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
              className=" text-2xl    "
              style={{
                color: "black",
                textDecoration: todo.completed ? "line-through" : null,
              }}
            >
              <div onDoubleClick={handleEditing}>{todo.task}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
