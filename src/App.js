import Main from "./Components/Main";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Verify from './Components/Verify';
import HomePage from './Components/HomePage'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{backgroundColor:'#EDF0F5'}}>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Verify" element={<Verify/>}/>
        <Route path="/home" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;