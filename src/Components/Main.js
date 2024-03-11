import React from 'react'
import homePic1 from '../Images/homePic1.jpg'
import Card from './Card';
import Navbar from './Navbar';
import Footer from './Footer';
export default function Main() {
    const divStyle = {
        background: `url(${homePic1}) no-repeat fixed`,
        backgroundSize: '100%',
    };
    return (
        <>
            <Navbar links={[
                { name: 'Home', path: '/' },
                { name: 'Available Rides', path: '/rides' },
                { name: 'Profile', path: '/profile' },
                { name: 'Logout', path: '/' },
            ]} />

            <div className='mt-5 pt-5 w-100' style={{ ...divStyle, height: '91.5vh' }}>
                <div className="container">
                    <div className="col-3 mt-5 pt-5 ms-4">
                        <input className='form-control rounded-pill' type="text" placeholder='Pickup' />
                        <input className='form-control mt-4 rounded-pill' type="text" placeholder='Drop' />
                        <div className="d-grid mt-4">
                            <button style={{ backgroundColor: '#091F5B' }} type="button" className="btn rounded-pill text-white">search for cabs</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className="display-6 fw-bold text-start" style={{ color: '#091F5B' }}>Why Ride Together ?</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <Card message='At Ride Together, we prioritize your safety above all else. Our cab booking service is designed to provide you with a secure and comfortable travel experience.' />
                    </div>
                    <div className="col-lg-4">
                        <Card message='Experience the ultimate convenience with safely. All our drivers undergo strict background checks. We offer a range of services tailored to meet the diverse needs of modern people on the move.' />
                    </div>
                    <div className="col-lg-4">
                        <Card message='At Ride Together, we are committed to providing exceptional customer support. Our dedicated team is available round-the-clock to assist you with any queries or concerns you may have.' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
