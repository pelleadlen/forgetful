import React, { useState, useEffect } from "react";
import * as localforage from "localforage";
import "./App.css";
import "./index.css";
import { NavBar } from "./components/NavBar";
import { Loader } from "./components/Loader";
import { motion, AnimatePresence } from "framer-motion";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos-2";

function App() {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState({ open: false });
  const [color, setColor] = useState(null);

  useEffect(() => {
    localforage.setItem(LOCAL_STORAGE_KEY, todos);
  }, [todos]);

  useEffect(() => {
    const readStorage = async () => {
      const storageTodos = await localforage.getItem(LOCAL_STORAGE_KEY);
      if (storageTodos) {
        setTodos(storageTodos);
      }
    };
    readStorage();
  }, []);

  function addTodo(todo) {
    setTodos((prev) => (prev.length ? [...prev, todo] : [todo]));
    setModal((prev) => ({ open: false }));
  }
  function editTodo(todo) {
    const prev = todos.filter((t) => t.id !== todo.id);
    setTodos([...prev, todo]);
  }
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleClickOpen = () => {
    setModal({ open: true });
  };

  const handleClose = () => {
    setModal({ open: false });
  };
  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: +`10` }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="h-full overflow-y-hidden fixed left-0 top-0 z-10">
            <NavBar openModal={handleClickOpen} setColor={setColor} />
          </div>

          <TodoForm
            addTodo={addTodo}
            open={modal.open}
            close={handleClose}
            color={color}
          />

          <AnimatePresence>
            <motion.div className="ml-32 p-4 pt-14 flex flex-col ">
              <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
                editTodo={editTodo}
                setTodos={setTodos}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}

export default App;
