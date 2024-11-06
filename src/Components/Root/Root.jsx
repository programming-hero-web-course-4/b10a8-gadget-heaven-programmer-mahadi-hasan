import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import useTabTitle from '../../Hooks/useTabTitle';

const Root = () => {
    useTabTitle('Gadget Heaven')
    return (
        <div className='flex flex-col min-h-screen'>
            <Header></Header>
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;