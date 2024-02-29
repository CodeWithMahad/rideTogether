import React from 'react'

export default function RideCard(props) {
    return (
        <div className='mt-4 mx-2'>
            <div className="card" style={{width:'20rem'}}>
                <img src={props.image} className="card-img-top" style={{height:"40vh"}} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.carName}</h5>
                        <p className="card-text">Cost per Seat: {props.seatPrice}</p>
                        <p className="card-text">Available Seat: {props.seatAvailable}</p>
                        <a href="/" className="btn btn-primary">Book Seats</a>
                    </div>
            </div>
        </div>
    )
}
