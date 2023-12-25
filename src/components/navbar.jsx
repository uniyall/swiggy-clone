import React, { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.item);
  console.log(cartItems);
  const { userName } = useContext(UserContext);
  const [navUser, setNavUser] = useState("");
  const isOnline = useIsOnline();
  const [logButton, setLogButton] = useState("Login");
  return (
    <nav className="h-[100px] bg-amber-600 flex flex-row justify-between items-center pr-5 pl-5 text-white fixed left-0 right-0 top-0 z-10">
      <div className="w-[500px] flex items-center">
        <Link to="/" className={`text-[35px] no-underline text-inherit mr-2`}>
          SwiggyClone
        </Link>
        <div
          className={`w-3 h-3 border-radius rounded-full ${
            isOnline ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
      </div>

      <div className="flex flex-1 flex-row justify-end">
        <Link to="/" className="text-[20px] no-underline text-inherit px-5">
          Home
        </Link>
        <Link
          to="/contact"
          className="text-[20px] no-underline text-inherit px-5"
        >
          Contact Us
        </Link>
        <Link
          to="/about"
          className="text-[20px] no-underline text-inherit px-5"
        >
          About Us
        </Link>
        <Link to="/cart" className="text-[20px] no-underline text-inherit px-5">
          {`Cart - ${cartItems.length}`}
        </Link>
        <Link to="/" className="text-[20px] no-underline text-inherit px-5">
          <button
            className="rounded-full border-none p-2 bg-black text-white font-semibold cursor-pointer hover:shadow-lg"
            onClick={() => {
              if (logButton == "Login") {
                setLogButton("Logout");
              } else {
                setLogButton("Login");
              }
            }}
          >
            {logButton}
          </button>
        </Link>
        <div className="text-[20px] no-underline text-inherit px-5">
          {userName}
        </div>
      </div>
    </nav>
  );
}
