import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DetailCard(props) {
    return (
        <div>
            {/* Render the icon passed as a prop */}
            <FontAwesomeIcon style={{ width: '100px' }} size='3x' className='ms-4 opacity-75 mb-4' icon={props.icon} />
            <h3 className=" ms-4 mb-3" >{props.title}</h3>
            <p className="card-text ms-3 fs-5">{props.text}</p>
        </div>
    );
}
