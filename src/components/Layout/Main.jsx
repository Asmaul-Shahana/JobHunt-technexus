import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Toaster
                toastOptions={{
                    style: {
                        padding: '16px',
                        color: 'white',
                        background: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'
                    },
                }}
            />
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;