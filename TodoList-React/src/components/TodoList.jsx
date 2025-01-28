import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const moveTodoUp = (index) => {
    if (index > 0) {
      const newTodos = [...todos];
      [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
      setTodos(newTodos);
    }
  };

  const moveTodoDown = (index) => {
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      [newTodos[index + 1], newTodos[index]] = [newTodos[index], newTodos[index + 1]];
      setTodos(newTodos);
    }
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-[#AFF8DB] shadow-lg rounded-lg">
      <AddTodo onAdd={addTodo} />
      <AnimatePresence>
        {todos.map((todo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TodoItem
              todo={todo}
              onDelete={() => deleteTodo(index)}
              onMoveUp={() => moveTodoUp(index)}
              onMoveDown={() => moveTodoDown(index)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <button onClick={resetTodos} className="mt-4 bg-[#FFFD95] text-[#264653] py-2 px-4 rounded shadow-md hover:shadow-lg transition-shadow">
        Reset
      </button>
    </div>
  );
};

export default TodoList;
