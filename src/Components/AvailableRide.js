import React from 'react'
import RideCard from './RideCard'
import corola from '../Images/corola.jpg'
import alto from '../Images/alto.jpg'
import benz from '../Images/benz.jpg'
export default function AvailableRide() {
  return (
    <div className='mt-5'>
      <h1 className="display-6 fw-bold" style={{ color: '#091F5B' }}>Available Rides</h1>
        <div className="container d-flex justify-content-evenly">
            <div className="row">
                <div className="col">
                    <RideCard carName="benz" seatPrice="3000" image={benz} seatAvailable='3'/>
                </div>
                <div className="col">
                    <RideCard carName="Alto" seatPrice="1000" image={alto} seatAvailable='3'/>
                </div>
                <div className="col">
                    <RideCard carName="corola" seatPrice="2000" image={corola} seatAvailable='3'/>
                </div>
            </div>
        </div>
    </div>
  )
}
