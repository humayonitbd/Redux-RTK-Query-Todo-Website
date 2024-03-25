// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
      <div>
        <nav>
          <ul className="flex justify-center items-center">
            <Link>
              {" "}
              <li className="mr-5">Home</li>
            </Link>
            <Link to='/post-page'>
              <li className="">Post</li>
            </Link>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
};

export default MainLayout;