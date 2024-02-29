import React from 'react'

export default function Footer() {
    return (
        <div className='mt-4 bg-body-tertiary'>
            <div className="container">
                <div className="row">
                <div className="col-lg-6 text-center">
                    <h1 className="display-6 fw-bold text-start mt-3" style={{ color: '#091F5B' }}>Ride Together</h1>
                    <p className='text-start'>Let’s Ride together is a website that will provide an opportunity to university faculty members, students and other staff who belong to other cities like Faisalabad, Bahawalpur, Islamabad, Lahore, and Multan will share personal cars and ride together.</p>
                </div>
                <div className="col-lg-6">
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">About</th>
                                <th scope="col">Products</th>
                                <th scope="col">Support</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Company</td>
                                <td>Model</td>
                                <td>Contact</td>
                            </tr>
                            <tr>
                                <td>Community</td>
                                <td colSpan={2}>Stores</td>
                            </tr>
                            <tr>
                                <td>Carrers</td>
                                <td colSpan={2}>Services</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <hr />
                <p className='text-center m-0 mt-4'>ridetogether.com © 2024 All rights reserved</p>
                <br />
                </div>
               
        </div>
    )
}
