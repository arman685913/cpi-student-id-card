import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='md:max-w-11/12 mx-auto'>
            <div className='min-h-screen'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;