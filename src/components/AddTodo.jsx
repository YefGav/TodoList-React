import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);

  const handleAdd = () => {
    onAdd({ text: input, image });
    setInput('');
    setImage(null);
  };

  return (
    <div className="flex flex-col mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded py-2 px-4 w-full"
        placeholder="Agregar nuevo artículo"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mt-2"
      />
      <button onClick={handleAdd} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
        Agregar Tarea 📝
      </button>
    </div>
  );
};

export default AddTodo;
