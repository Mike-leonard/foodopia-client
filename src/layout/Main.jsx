import React from 'react';
import Header from '../components/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <ToastContainer/>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;