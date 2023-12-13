import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-[100px] bg-amber-600 flex flex-row justify-between items-center pr-5 pl-5 text-white fixed left-0 right-0 top-0">
      <Link to='/' className="w-[500px] text-[35px] no-underline text-inherit">SwiggyClone</Link>
      <div className="flex flex-1 flex-row justify-between">
        <Link to="/" className="text-[20px] no-underline text-inherit">Menu</Link>
        <Link to='/contact' className="text-[20px] no-underline text-inherit">Contact Us</Link>
        <Link to='/about' className="text-[20px] no-underline text-inherit">About Us</Link>
      </div>
    </nav>
  );
}
