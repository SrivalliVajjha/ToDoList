import React, { useState } from 'react'
import "./TaskForm.css";
import { UilEdit } from '@iconscout/react-unicons'

export default function TaskForm({ onAddTask }) {
    const [taskTitle, setTaskTitle] = useState('');

    function handleOnChange(e) {
        setTaskTitle(e.target.value);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newTask = {
                id: Date.now(),
                title: taskTitle,
                completed: false,
            };
            onAddTask(newTask);
            setTaskTitle('');
        }
    }

    return (
        <form >
            <div className="task-input">
                <UilEdit className="icon" size="25" color="#999" />
                <input type="text" name="task-title" id="task-title" placeholder="Add a New Task + Enter"
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                    value={taskTitle} />
                
            </div>
        </form>
    )
}
