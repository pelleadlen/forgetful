import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Dialog from "@mui/material/Dialog";
import { Editor } from "@tinymce/tinymce-react";

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
      <form className="rounded" onSubmit={handleSubmit}>
        <input
          placeholder="add todo"
          className="inputForm p-4 border-1 outline-black z-10 rounded border-black text-xl w-96"
          onChange={handleTaskInputChange}
        />

        <button onClick={close} type="submit"></button>
      </form>
    </Dialog>
  );
}

export default TodoForm;
