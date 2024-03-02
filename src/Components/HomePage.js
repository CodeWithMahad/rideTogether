import React from 'react';
import Navbar from './Navbar';
import mainPic from '../Images/mainPic.jpg';
import Footer from './Footer';
import UserCard from './UserCard';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const divStyle = {
        background: `url(${mainPic}) no-repeat fixed`,
        backgroundSize: '100%',
        height: '100vh'
    };
    const navigate = useNavigate();
    const handleClickForDriver = () => {
        navigate('/Signup');
    };

    return (
        <>
            <Navbar links={[
                { name: 'Home', path: '/' },
                { name: 'Login', path: '/Login' },
                { name: 'Signup', path: '/Signup' },
            ]} />
            <div className='' style={{ ...divStyle }}>

                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8 mt-2 ms-5 ps-5">
                            <h1 className="mt-4 pt-5 ms-5 text-black display-8" style={{ color: '#091F5B' }}>WE CONNECT DRIVERS & PASSENGERS FOR LEASUREABLE AND COST FROENDLY RIDE</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 pt-4">
                <div className="row text-center">
                    <div className="col-lg-6">
                        <UserCard
                            title='Become a Driver'
                            paragraphs={[
                                { icon: 'car', text: "Offer a rideshare for your  commute on long distance trips" },
                                { icon: 'user', text: "Fill your empty seats with passengers to share a ride" },
                                { icon: 'dollarSign', text: "Save hundreds of rupees per month and have fun riding with new friends" }
                            ]}
                            btnName='Join As A Driver'
                            onClick={handleClickForDriver}
                        />
                    </div>
                    <div className="col-lg-6">
                        <UserCard
                            title='Become a Passenger'
                            paragraphs={[
                                { icon: 'dotCircle', text: "Search among local or long distance affordable ride offers" },
                                { icon: 'creditCard', text: "Book and pay online or request a ride to a driver" },
                                { icon: 'headphones', text: 'Let yourself be driven, save money and enjoy sharing a ride' }
                            ]}
                            btnName='Join As A Passenger'
                            onClick={handleClickForDriver}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
