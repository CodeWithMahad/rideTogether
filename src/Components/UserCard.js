import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUser, faSackDollar, faLocationDot, faHeadphones, faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default function UserCard(props) {
    const icons = {
        car: faCar,
        user: faUser,
        dollarSign: faSackDollar,
        dotCircle: faLocationDot,
        headphones: faHeadphones,
        creditCard: faCreditCard,
    };

    const handleButtonClick = () => {
        // Call the function passed as a prop
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h1 className="display-6 fw-bold ms-4 mb-4 text-start" style={{ color: '#091F5B' }}>{props.title}</h1>
                    {props.paragraphs.map((item, index) => (
                        <div key={index} className="d-flex align-items-center mt-2">
                            <FontAwesomeIcon style={{ width: '50px' }} size='3x' className='ms-4 opacity-75' icon={icons[item.icon]} />
                            <p className="card-text text-start ms-3 fs-5">{item.text}</p>
                        </div>
                    ))}
                    <button type="button" className="btn mt-4 btn-primary btn-lg mx-auto" style={{ backgroundColor: '#091F5B' }} onClick={handleButtonClick}>{props.btnName}</button>
                </div>
            </div>
        </div>
    );
}
