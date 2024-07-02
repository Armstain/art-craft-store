import React from 'react';
import Navbar from '../Shared/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer.jsx';

const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className='container mx-auto'>
                    <Outlet></Outlet>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;