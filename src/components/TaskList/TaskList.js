import React from 'react'
import { useEffect } from 'react';
import Task from '../Task/Task';
import "./TaskList.css"

export default function TaskList({ tasks, handleCompleteTask, handleEditTitle,handleDeleteTask }) {

    useEffect(() => {
        console.log("TaskList");
        console.log(tasks);
        tasks.map((task) => {
            console.log(task.title);
        })

    }, [tasks])

    const onCompleteTask = (taskId) => {
        handleCompleteTask(taskId);
    }

    const onEditTaskTitle = (taskId,taskText) => {
        handleEditTitle(taskId,taskText);
    }

    const onDeleteTask =(taskId) =>{
        handleDeleteTask(taskId);
    }

    return (
        <div className="center">
            {tasks.length === 0 ? <h2>No Tasks</h2>
                :
                <ul className="listUl">
                    {
                        tasks.map((task) => (
                        <Task key={task.id} task={task}
                            handleCompleteTask = {onCompleteTask}
                            handleEditTitle = {onEditTaskTitle}
                            handleDeleteTask = {onDeleteTask}></Task>
                        ))
                    }
                </ul>
            }
        </div>
    )
}
