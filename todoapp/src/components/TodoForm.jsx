// src/components/TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className=' '>
        <form onSubmit={handleSubmit} className="flex w-full items-center p-4 bg-gray-100">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 p-2 w-full rounded"
        placeholder="Add a new todo"
      />
      <button type="submit" className="ml-2 py-2 px-6 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
    </div>
    
  );
}

export default TodoForm;
