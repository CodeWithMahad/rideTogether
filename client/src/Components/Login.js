import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    
    const formData = [
      email,
      password,
    ];
  
    console.log(formData);

    navigate('/home');
  }
  

  return (
    <>
      <Navbar links={[
        { name: 'Home', path: '/' },
        { name: 'Login', path: '/Login' },
        { name: 'Signup', path: '/Signup' },
      ]} />
      <div className='container' style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-lg-7 mt-5 pt-5">
            <h1 className="display-6 fw-bold mt-5" style={{ color: '#091F5B' }}>Ride Together</h1>
            <h5 className='display-6 fw-bold mt-3' style={{ color: '#091F5B' }}>Login to Continue</h5>
          </div>
          <div className="col-lg-5 my-3 py-5">
            <div className="card mt-5" style={{ width: '23rem', borderRadius: '30px' }}>
              <div className="card-body my-5">
                <form>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="">
                    <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <Link to='/' className='d-flex justify-content-end'>Forgot password</Link>
                  <div className="d-grid gap-2 mt-3">
                    <button onClick={handleClick} type="submit" className="btn text-white" style={{ backgroundColor: '#091F5B' }} >Login</button>
                  </div>
                  <Link to='/Signup' className='d-flex justify-content-center mt-3'>New here? Register here!</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
