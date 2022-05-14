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
      <form className="rounded flex flex-row w-96  " onSubmit={handleSubmit}>
        <input
          fullwidth
          placeholder="type your todo here"
          className="inputForm p-4 border-1 outline-none rounded border-black text-lg w-full "
          onChange={handleTaskInputChange}
        />

        <button
          className=" text-gray-300 text-xl pr-3 "
          onClick={close}
          type="submit"
        >
          ↵
        </button>
      </form>
    </Dialog>
  );
}

export default TodoForm;
