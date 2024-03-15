import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

export default function DriverSignup() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [licensePic, setLicensePic] = useState(null);
  const location = useLocation();

  const handleClick = () => {
    navigate('/Home');
  }

  const handleProfilePicChange = (event) => {
    setProfilePic(event.target.files[0]);
  }

  const handleLicensePicChange = (event) => {
    setLicensePic(event.target.files[0]);
  }

  useEffect(() => {
    if (location.pathname === '/Signup') {
      let elem = document.getElementById('SignUpDiv');
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar links={[
        { name: 'Home', path: '/' },
        { name: 'Login', path: '/Login' },
        { name: 'Signup', path: '/Signup' },
      ]} />
      <div className='container mt-5 pt-4'>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h5 className='display-6 fw-bold mt-3 text-center' style={{ color: '#091F5B' }}>Signup and get a leisurely ride</h5>
            <div className="card my-5 ms-3" style={{ borderRadius: '30px' }}>
              <div className="card-body my-3">
                <form>
                  <div className="mb-3 text-center">
                    <label htmlFor="profilePic" className="form-label">Profile Picture</label>
                    <input type="file" accept="image/*" className="form-control" id="profilePic" onChange={handleProfilePicChange} />
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input type="text" className="form-control" placeholder='First Name' />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder='Last Name' />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input type="number" className="form-control" placeholder='Age' />
                    </div>
                    <div className="col">
                      <input type="number" className="form-control" placeholder='Phone No' />
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label>
                      <input type="radio" name="gender" value="male" />
                      Male
                    </label>
                    <label className='ms-3'>
                      <input type="radio" name="gender" value="female" />
                      Female
                    </label>
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder='Email' />
                  </div>
                  <div className="mb-3 text-center">
                    <label htmlFor="licensePic" className="form-label">CNIC Picture</label>
                    <input type="file" accept="image/*" className="form-control" id="licensePic" onChange={handleLicensePicChange} />
                  </div>
                  <div className="">
                    <input type="password" className="form-control" placeholder='Password' />
                  </div>
                  <div className="text-center mt-3">
                    <button onClick={handleClick} type="submit" className="btn text-white btn-lg px-5" style={{ backgroundColor: '#091F5B' }}>Signup</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
