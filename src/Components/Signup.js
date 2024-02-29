import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
export default function Signup() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Verify');
  }
  return (
    <div className='container' style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-lg-7">
          <h1 className="display-6 fw-bold" style={{ color: '#091F5B' }}>Ride Together</h1>
          <h5 className='display-6 fw-bold mt-3' style={{ color: '#091F5B' }}>Signup and get a leasureable ride</h5>
        </div>


        <div className="col-lg-5">
          <div className="card mt-5 ms-3" style={{ width: '23rem', borderRadius: '30px' }}>
            <div className="card-body my-3">
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder='First Name' />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder='Last Name' />
                </div>
                <div className="mb-3">
                  <input type="number" className="form-control" placeholder='Age' />
                </div>
                <div className="mb-3">
                  <input type="number" className="form-control" placeholder='Phone No' />
                </div>
                <div className='mb-3'>
                  <label>
                    <input  type="radio" name="gender" value="male"/>
                     Male
                  </label>
                    <label className='ms-3'>
                      <input  type="radio" name="gender" value="female"/>
                        Female
                    </label>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder='Email' />
                </div>
                <div className="">
                  <input type="password" className="form-control" placeholder='Password' />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button onClick={handleClick} type="submit" className="btn text-white" style={{ backgroundColor: '#091F5B' }} >Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
