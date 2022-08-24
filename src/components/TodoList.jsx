import React from "react";
import Todo from "./Todo";
import Message from "./Message";
import { Reorder } from "framer-motion";

function TodoList({
  todos,
  toggleComplete,
  removeTodo,
  className,
  editTodo,
  setTodos,
}) {
  const onReorder = (items) => {
    setTodos(items);
  };
  return (
    <Reorder.Group
      axis="y"
      values={todos}
      onReorder={onReorder}
      className=" self-start pt-12 flex flex-col gap-2"
    >
      {todos.length ? (
        todos.map((todo) => (
          <Reorder.Item
            layout
            whileHover={{ scale: 1.002 }}
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -12, opacity: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 55 }}
            exit={{ y: +12, opacity: 0 }}
            className="relative"
            key={todo.id}
            value={todo}
          >
            <Todo
              removeTodo={removeTodo}
              todo={todo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          </Reorder.Item>
        ))
      ) : (
        <Message>{[]}</Message>
      )}
    </Reorder.Group>
  );
}
export default TodoList;
