// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-center items-center'>
                    <li>Home</li>
                    <li>About</li>
                    </ul>
                </nav>
            <Outlet />
        </div>
    );
};

export default MainLayout;