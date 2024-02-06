import React from 'react'
import { useEffect } from 'react';
import Task from '../Task/Task';
import "./TaskList.css"

export default function TaskList({ tasks,handleCompleteTask }) {

    useEffect(()=>{
        console.log("TaskList");
        console.log(tasks);
        tasks.map((task)=>{
            console.log(task.title);
        })

    },[tasks])

    const onCompleteTask = (taskId) =>{
        handleCompleteTask(taskId);
    }

    return (
        <div className="center">
            {tasks.length === 0 ? <h1>No Tasks</h1>
                :
                    <ul class="listUl">
                        {
                            tasks.map((task) => (
                                    
                                <Task key={task.id} task={task} handleCompleteTask={onCompleteTask}></Task>
                            ))
                        }
                    </ul>
            }


        </div>
    )
}
