import './App.css';
import SignUpOne from './Component/SignupOne';
import SignUpTwo from './Component/Signuptwo';
import LogIn from './Component/Login';
import Home from './Component/Home';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import ReadBook from './Component/ReadBook';
import ToDoList from './Component/ToDoList';
import Travel from './Component/Travel';
import CelestiaAI from './Component/CelestiaAI';
import Chats from './Component/Chat/Chat';
import Main from './Component/Main';
import SignUpThree from './Component/SignUpThree';
import TeamSection from './Component/Teams/TeamSection';
import TasksSection from './Component/Tasks/TasksSection';


function App() {
  let [register, setRegister] = useState({
    Role: "",
    FirstName: "",
    LastName: "",
    DOB:"",
    Gender:"",
    Email: "",
    Phone: "",
    Password: "",
    confirmPassword: "",
    Book: [],
    To_Do: [],
    Travel: [],
})
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<LogIn/>}/>
          <Route path='/SignUP'>
            <Route path='SignUpOne' element={<SignUpOne register={register} setRegister={setRegister}/>}/>
            <Route path='SignUpTwo' element={<SignUpTwo register={register} setRegister={setRegister}/>}/>
            <Route path='SignUpThree' element={<SignUpThree register={register} setRegister={setRegister}/>}/>
          </Route>
          <Route path='/Register' element={<LogIn register={register} setRegister={setRegister}/>}/>
          <Route path='/Home' element={<Home/>}>
            <Route path='Main' element={<Main/>}/>
            <Route path='Personal'>
              <Route path='ReadBook' element={<ReadBook/>}/>
              <Route path='ToDoList' element={<ToDoList/>}/>
              <Route path='Travel' element={<Travel/>}/>
            </Route>
            <Route path='Work'>
              <Route path='CelestiaAI' element={<CelestiaAI/>}/>
              <Route path='Chats' element={<Chats/>}/>
              <Route path='Teams' element={<TeamSection/>}/>
              <Route path='Tasks' element={<TasksSection/>}/>
            </Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
