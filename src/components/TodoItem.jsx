import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="flex items-center mb-4 border rounded p-2">
      <div className="flex-grow">
        <p className="text-lg">{todo.text}</p>
        {todo.image && (
          <img
            src={URL.createObjectURL(todo.image)}
            alt="Imagen subida"
            className="w-20 h-20 object-cover mt-2"
          />
        )}
      </div>
      <button onClick={onDelete} className="bg-red-500 text-white py-1 px-3 rounded ml-2">
        Borrar
      </button>
    </div>
  );
};

export default TodoItem;
