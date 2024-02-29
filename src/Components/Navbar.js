import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top'>
                <div className='container'>
                    <NavLink className='navbar-brand fw-bold' to='/' style={{color:'#091F5B'}}>Ride Together</NavLink>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                        <ul className='collapse navbar-collapse navbar-nav me-auto mb-2 mb-lg-0 justify-content-end'>
                            <li className='nav-item'>
                                <NavLink className='nav-link active' aria-current='page' to='/'>Home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/'>Available Rides</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/'>Profile</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/'>Support</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/'>Logout</NavLink>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}
