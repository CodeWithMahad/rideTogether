import React from 'react'

export default function Card(props) {
    return (
        <div>
            <div className="card mt-5" style={{height:'200px',backgroundColor:'#091F5B',color:'white'}}>
                <div className="card-body">
                    <p className="card-text mt-3">{props.message}</p>
                </div>
            </div>
        </div>
    )
}
