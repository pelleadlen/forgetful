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
      className={className}
    >
      {todos.length ? (
        todos.map((todo) => (
          <Reorder.Item
            whileHover={{ scale: 1.005 }}
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -24, opacity: 0, scale: 1 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
            exit={{ y: +24, opacity: 0 }}
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
