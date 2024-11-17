import './App.css';
import SignUpOne from './Component/SignUpOne';
import SignUpTwo from './Component/SignUpTwo';
import LogIn from './Component/LogIn';
import Home from './Component/Home';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import ReadBook from './Component/ReadBook';
import ToDoList from './Component/ToDoList';
import Travel from './Component/Travel';
import CelestiaAI from './Component/CelestiaAI';
import Chats from './Component/Chats';
import Teams from './Component/Teams';
import Tasks from './Component/Tasks';
import Main from './Component/Main';
import SignUpThree from './Component/SignUpThree';

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
              <Route path='Teams' element={<Teams/>}/>
              <Route path='Tasks' element={<Tasks/>}/>
            </Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
