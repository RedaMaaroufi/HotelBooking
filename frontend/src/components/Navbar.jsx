import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-[2rem] bg-black text-white">
        <Link to="/">
          <div>
            <h2 className="font-bold text-2xl ">
              Marokko <span className="text-lime-400">HOTEL</span>
            </h2>
          </div>
        </Link>

        <div>
          <ul className="flex justify-between gap-8">
            <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
              Bookings
            </li>
            <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
              Rooms
            </li>
            <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
