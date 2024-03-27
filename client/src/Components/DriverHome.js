import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

export default function DriverHome() {

    return (
        <div>
            <Navbar links={[
            ]} />
            <SideBar />
            
        </div>
    );
}
