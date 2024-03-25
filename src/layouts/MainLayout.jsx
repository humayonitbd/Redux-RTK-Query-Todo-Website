// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
      <div >
        <nav className="text-white bg-black py-3">
          <ul className="flex justify-center items-center">
            <Link>
              {" "}
              <li className="mr-5 bg-red-400 px-5 rounded py-1">Home</li>
            </Link>
            <Link to="/post-page">
              <li className="bg-red-400 px-5 rounded py-1">Post</li>
            </Link>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
};

export default MainLayout;