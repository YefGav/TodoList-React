import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

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
    <div className="max-w-xl mx-auto p-4">
      <AddTodo onAdd={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => deleteTodo(index)}
          onMoveUp={() => moveTodoUp(index)}
          onMoveDown={() => moveTodoDown(index)}
        />
      ))}
      <button onClick={resetTodos} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
        Reset
      </button>
    </div>
  );
};

export default TodoList;
