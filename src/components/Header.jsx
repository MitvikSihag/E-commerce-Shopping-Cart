import React from "react";
import {Link} from "react-router-dom";

function Header()
{
    return(
        <div className="flex justify-between items-center h-20 w-full mb-10 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
        <nav className="flex justify-between items-center w-full px-10">
          <Link to={'/'}>
            <h1 className="text-3xl font-extrabold text-white py-4 tracking-wide">
              Multi-Purpose Store
            </h1>
          </Link>
          <div className="flex justify-center items-center space-x-8">
            <Link to={'/'}>
              <p className="text-xl font-semibold text-blue-200 hover:text-white transition duration-300">
                Home
              </p>
            </Link>
            <Link to={'/cart'}>
              <p className="text-xl font-semibold text-blue-200 hover:text-white transition duration-300">
                Cart
              </p>
            </Link>
          </div>
        </nav>
      </div>
        );
}

export default Header;