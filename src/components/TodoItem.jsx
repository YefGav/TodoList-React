import React from 'react';

const TodoItem = ({ todo, onDelete, onMoveUp, onMoveDown }) => {
  return (
    <div className="flex items-center mb-2">
      <p className="flex-grow text-lg">{todo}</p>
      <button onClick={onMoveUp} className="bg-yellow-500 text-white py-1 px-3 rounded ml-2">↑</button>
      <button onClick={onMoveDown} className="bg-yellow-500 text-white py-1 px-3 rounded ml-2">↓</button>
      <button onClick={onDelete} className="bg-red-500 text-white py-1 px-3 rounded ml-2">Borrar</button>
    </div>
  );
};

export default TodoItem;
