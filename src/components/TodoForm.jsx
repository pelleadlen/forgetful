import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Dialog from "@mui/material/Dialog";

uuidv4();

function TodoForm({ addTodo, open, close, color }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4(), color });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <Dialog open={open} onClose={close}>
      <form onSubmit={handleSubmit}>
        <input
          id="input-form"
          autoComplete="off"
          autoFocus
          placeholder="Add your todo"
          onChange={handleTaskInputChange}
        />

        <button className=" submit-btn " onClick={close} type="submit">
          ↵
        </button>
      </form>
    </Dialog>
  );
}

export default TodoForm;
