import React from 'react';
import Navbar from './Navbar';
import mainPic from '../Images/mainPic.jpg';
import Footer from './Footer';
import UserCard from './UserCard';
import Card from './Card'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DetailCard from './DetailCard';
import { faCar, faLocationDot, faFilePen } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    const divStyle = {
        background: `url(${mainPic}) no-repeat fixed`,
        backgroundSize: '100%',
        height: '100vh'
    };
    const navigate = useNavigate();
    const handleClickForDriver = () => {
        navigate('/DriverSignup');
    };
    const handleClickForPAssenger = () => {
        navigate('/PassengerSignup');
    };
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/Signup') {
            let elem = document.getElementById('SignUpDiv');
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"});
            }
        }
    }, [location]);

    return (
        <>
            <Navbar links={[
                { name: 'Home', path: '/' },
                { name: 'Login', path: '/Login' },
                { name: 'Signup', path: '/Signup' },
            ]} />
            <div className='container' style={{ ...divStyle }}>
                <div className="">
                    <div className="row ">
                        <div className="col-lg-12 mt-2 text-center bg-black opacity-50">
                            <h1 className="mt-4 pt-4 text-white display-8 opacity-100" style={{ color: '#091F5B' }}>WE CONNECT DRIVERS & PASSENGERS</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id='SignUpDiv' className="container mt-5 py-3">
                <div  className="row text-center my-5 py-5">
                    <div className="col-lg-6 mb-5">
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
                            onClick={handleClickForPAssenger}
                        />
                    </div>
                </div>
                <div className="container mb-5 pb-4">
                <div className="row text-center my-5 py-5 bg-white">
                    <div className="col-lg-4">
                        <DetailCard title='Sign Up Free' icon={faFilePen} text='Drivers and passengers don’t pay any registration or membership fee' />
                    </div>
                    <div className="col-lg-4">
                        <DetailCard title='Daily commute' icon={faCar} text='Find a carpool buddy for your daily commute at no cost' />
                    </div>
                    <div className="col-lg-4">
                        <DetailCard title='Long distance rides' icon={faLocationDot} text='Post or book a ride everywhere in all city of Pakistan' />
                    </div>
                </div>
                </div>
                <div className="container mt-5 mb-5">
                <h1 className="display-6 mb-3 fw-bold text-start" style={{ color: '#091F5B' }}>Why Ride Together ?</h1>
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
            </div>
            <Footer />
        </>
    );
}
