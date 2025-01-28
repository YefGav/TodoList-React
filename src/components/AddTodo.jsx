import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    onAdd(input);
    setInput('');
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded py-2 px-4 w-full"
        placeholder="Agregar nuevo artículo"
      />
      <button onClick={handleAdd} className="ml-2 bg-blue-500 text-white py-2 px-4 rounded">
        Agregar
      </button>
    </div>
  );
};

export default AddTodo;
