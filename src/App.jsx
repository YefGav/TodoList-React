import React from 'react';
import TodoList from './components/TodoList';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl">Lista de Tareas</h1>
      </header>
      <main className="p-4">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
