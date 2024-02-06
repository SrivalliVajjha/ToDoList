
import './App.css';
import TopNav from './components/TopNav/TopNav';
import { Route, Routes, useMatch, useResolvedPath } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import TaskForm from './components/TaskForm/TaskForm';
import { useState,useEffect } from 'react';
import TaskList from './components/TaskList/TaskList';


function App() {

  const resolvedPath = useResolvedPath("/");
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const [Tasks,setTasks] = useState([]);

  const handleAddTask = (newTask) =>{
    setTasks((prevTasks) => [...prevTasks,newTask]);
  }

  const handleCompleteTask = (taskId) =>{
    const updatedTasks = Tasks.map(task =>{
      if(task.id === taskId){
        return {...task,completed:!task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const handleEditTitle = (taskId,newTaskTitle) =>{
    const updatedTasks = Tasks.map((task) =>{
      if(task.id === taskId){
        return {...task,title:newTaskTitle}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const handleDeleteTask = (taskId) =>{
   const updatedTasks = Tasks.filter(item =>item.id != taskId);
   setTasks(updatedTasks);
  }

  // useEffect(()=>{
  //   console.log(Tasks);
  // },[Tasks])

  return (
    <div className="App">
      <TopNav taskCount={Tasks.length}></TopNav>
      {
      isActive ?
        <div className = "container">
          <TaskForm onAddTask={handleAddTask}></TaskForm>
          <TaskList tasks={Tasks} 
          handleCompleteTask ={handleCompleteTask}
           handleEditTitle={handleEditTitle} 
           handleDeleteTask = {handleDeleteTask}></TaskList>
        </div> 
        :
        <div className="container route-container">
          <Routes>
            <Route path="/about" Component={About}></Route>
            <Route path="/contact" Component={Contact}></Route>
          </Routes>
        </div>
      }


    </div>
  );
}

export default App;
