import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  }
  return (
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
                  <input type="email" className="form-control" placeholder='Email' />
                </div>
                <div className="">
                  <input type="password" className="form-control" placeholder='Password' />
                </div>
                <Link To='/' className='d-flex justify-content-end'>forgot password</Link>
                <div className="d-grid gap-2 mt-3">
                  <button onClick={handleClick} type="submit" className="btn text-white" style={{ backgroundColor: '#091F5B' }} >Login</button>
                </div>
                <Link to='/Signup' className='d-flex justify-content-center mt-3'>new here? register here!</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
