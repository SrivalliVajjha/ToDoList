import React from 'react'
import { UilEditAlt } from '@iconscout/react-unicons';
import "./Task.css";

export default function Task({ task, handleCompleteTask }) {

  const handleRadio = () => {
    handleCompleteTask(task.id);
  }
  return (

    <li className="task" key={task.id}>
      <div>
        <input id={task.id} type="radio" value={task.completed} checked={task.completed} onClick={handleRadio} readOnly></input>
        <label htmlFor={task.id}>
          <span className={task.completed ? "completed" : ""}>{task.title}</span>
        </label>
      </div>

      <UilEditAlt className="icon" size="18" color="#000" />
    </li>
  )
}
