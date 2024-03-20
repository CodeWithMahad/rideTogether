import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
        <div className="bg-dark" style={{height:'91vh'}}>
            <h1 className="text-center display-6 fw-bold text-white mt-5 pt-5">
                Driver Profile
            </h1>
            <div className='mt-5 pt-3 ms-5'>
            <Link to={'/'} className='text-white fs-4 pt-5' style={{textDecoration:'none'}}>Driver Info</Link>
            <br />
            <Link className='text-white fs-4 pt-5' style={{textDecoration:'none'}}>Vehicle info</Link>
            <br />
            <Link className='text-white fs-4 pt-5' style={{textDecoration:'none'}}>Notification</Link>
            <br />
            <Link className='text-white fs-4' style={{textDecoration:'none'}}>Rides</Link>  
            </div>
      </div>
    </div>
  )
}

export default SideBar
