import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }
  return (
    <div className="container-fluid mt-5" style={{  }}>
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ borderRight: '2px solid #091F5B',height: '93vh' }}>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
            <Link to='/' className="d-flex align-items-center pb-3 mb-md-0 me-md-auto  text-decoration-none" style={{ color: '#091F5B' }}>
              <span className="fs-5 d-none d-sm-inline mt-3">Dashboard</span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <Link to='/DriverProfile' className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline text-decoration-none" style={{ color: '#091F5B' }}>Profile</span>
                </Link>
              </li>
              <li>
                <Link href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-decoration-none" style={{ color: '#091F5B' }}>Vahicle Info</span> </Link>
                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                  <li className="w-100">
                    <Link to='/' className="nav-link px-0 text-white text-decoration-none"> <span className="d-none d-sm-inline">Item</span> 1 </Link>
                  </li>
                  <li>
                    <Link to='/' className="nav-link px-0 text-white text-decoration-none"> <span className="d-none d-sm-inline">Item</span> 2 </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/' className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-decoration-none" style={{ color: '#091F5B' }}>Notifications</span></Link>
              </li>
              <li>
                <Link href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline text-decoration-none" style={{ color: '#091F5B' }}>Rides</span> </Link>
              </li>
            </ul>
              <button onClick={handleClick} type="submit" className="btn text-white mx-auto" style={{ backgroundColor: '#091F5B' }}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
