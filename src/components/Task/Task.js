import React, { useState } from 'react'
import { UilEditAlt, UilCheck, UilTimes, UilTrashAlt } from '@iconscout/react-unicons';
import "./Task.css";

export default function Task({ task, handleCompleteTask, handleEditTitle, handleDeleteTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [taskText, setTaskTest] = useState(task.title);

  const handleRadio = () => {
    handleCompleteTask(task.id);
  }

  const handleEdit = () => {
    setTaskTest(task.title);
    setIsEdit(!isEdit);
  }

  const handleOnChangeEditText = (e) => {
    setTaskTest(e.target.value);
  }

  const handleOnSubmitEditText = (e) => {
    handleEditTitle(task.id, taskText);
    e.preventDefault();
    setIsEdit(false);
  }

  const handleDelete = (e) => {
    handleDeleteTask(task.id);
    e.preventDefault();
  }

  return (

    <li className="task" key={task.id}>
      {isEdit ?
        <div className='editDiv'>
          <input className="editInput" type="text" value={taskText} onChange={handleOnChangeEditText}></input>
          <button title="Save" className="checkIcon" onClick={handleOnSubmitEditText}>
            <UilCheck className="icon" size="18" color="#000" />
          </button>
          <button title="Cancel" className="timesIcon" onClick={handleEdit}>
            <UilTimes className="icon" size="18" color="#000" />
          </button>
        </div> :
        <div className="initView">
          <div className="radio-input-div">
            <input id={task.id} type="radio" value={task.completed} checked={task.completed} onClick={handleRadio} readOnly></input>
            <label htmlFor={task.id}>
              <span className={task.completed ? "completed taskText" : "taskText"}>{task.title}</span>
            </label>
          </div>
          <div>
            {task.completed ?
              <>
              </> :
              <>
                <button title='Edit Task' className="editIcon">
                  <UilEditAlt className="icon" size="18" color="#000" onClick={handleEdit} />
                </button>
                <button title='Delete Task' className='deleteIcon'>
                  <UilTrashAlt className="icon" size="18" color="#000" onClick={handleDelete} />
                </button>
              </>
            }
          </div>
        </div>
      }



    </li>
  )
}
