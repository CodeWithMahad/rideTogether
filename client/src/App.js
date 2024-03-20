import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./Components/Main";
import Login from './Components/Login';
import DriverSignup from './Components/DriverSignup';
import PassenderSignUp from './Components/PassenderSignUp';
import HomePage from './Components/HomePage';
import DriverHome from './Components/DriverHome';
import Profile from './Components/Profile';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div style={{backgroundColor:'#EDF0F5'}}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<HomePage/>}/>
          <Route path="/DriverSignup" element={<DriverSignup/>}/>
          <Route path="/DriverHome" element={<DriverHome/>}/>
          <Route path="/PassengerSignup" element={<PassenderSignUp/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/home" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
