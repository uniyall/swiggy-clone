import React from "react";

export default function navbar() {
  return (
    <nav className="h-[100px] bg-amber-600 flex flex-row justify-between items-center pr-5 pl-5 text-white fixed left-0 right-0 top-0">
      <div className="w-[500px] text-[35px]">SwiggyClone</div>
      <div className="flex flex-1 flex-row justify-between">
        <div className="text-[20px]">Menu</div>
        <div className="text-[20px]">Contact Us</div>
        <div className="text-[20px]">About Us</div>
      </div>
    </nav>
  );
}
