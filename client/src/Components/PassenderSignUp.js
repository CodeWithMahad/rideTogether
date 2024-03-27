import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PassengerSignUp() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [CNICPic, setCNICPic] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [gender, setGender] = useState(''); // Default value set as empty string
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  const handleClick = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Create an array to store input data
    const inputDataArray = [
      firstName,
      lastName,
      age,
      phoneNo,
      gender,
      email,
      password,
      profilePic,
      CNICPic
    ];
  
    // Log the array containing input data and image files
    console.log('Input Data Array:', inputDataArray);

    // Navigate to Home or perform any other necessary action
    navigate('/Home');
  }

  const handleProfilePicChange = (event) => {
    setProfilePic(event.target.files[0]);
  }

  const handCNICPicChange = (event) => {
    setCNICPic(event.target.files[0]);  
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
                      <input type="text" className="form-control" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input type="number" className="form-control" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="col">
                      <input type="number" className="form-control" placeholder='Phone No' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label>
                      <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
                      Male
                    </label>
                    <label className='ms-3'>
                      <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
                      Female
                    </label>
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3 text-center">
                    <label htmlFor="licensePic" className="form-label">CNIC Picture</label>
                    <input type="file" accept="image/*" className="form-control" id="CNICPic" onChange={handCNICPicChange} />
                  </div>
                  <div className="">
                    <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
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
