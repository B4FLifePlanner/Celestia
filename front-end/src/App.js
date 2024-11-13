import './App.css';
import Signupone from './Component/SignupOne';
import Signuptwo from './Component/Signuptwo';
import Login from './Component/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  let [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    birthDate:"",
    gender:"",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
})
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/singUp' element={<Signupone register={register} setRegister={setRegister}/>}/>
            <Route path='/signUpTwo' element={<Signuptwo register={register} setRegister={setRegister}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
