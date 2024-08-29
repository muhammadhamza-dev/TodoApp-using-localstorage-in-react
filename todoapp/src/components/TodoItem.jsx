// src/components/TodoItem.js
import React, { useState } from 'react';

function TodoItem({ todo, toggleComplete, removeTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        if (editText.trim()) {
            editTodo(todo.id, editText);
            setIsEditing(false);
        }
    };

    return (
        <div className="flex items-center justify-between p-2 border-b border-gray-300">
            {isEditing ? (
                <div className="flex items-center w-full">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                    <button
                        onClick={handleSave}
                        className="ml-2 p-2 bg-green-500 text-white rounded"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => setIsEditing(false)}
                        className="ml-2 p-2 bg-red-500 text-white rounded"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="flex justify-between items-start w-full">
                    <span
                        onClick={() => toggleComplete(todo.id)}
                        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                    >
                        {todo.text}
                    </span>
                    <div className='flex flex-row'>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="ml-2 text-blue-500 hover:text-blue-700"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => removeTodo(todo.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}

export default TodoItem;
