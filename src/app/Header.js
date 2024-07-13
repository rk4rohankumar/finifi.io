import React from 'react';
import { IoNotificationsCircleSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-3xl font-bold text-black">Manage Vendor</div>
      <div className="flex items-center">
        <div className="relative mr-4">
        <IoNotificationsCircleSharp size={50} color='black' />
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="https://i.ibb.co/zr5Mdn9/premium-photo-1670282393309-70fd7f8eb1ef-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg" alt="Profile" />
          <div className="text-gray-700">
            <div className="font-bold">Rohit Sharma</div>
            <div className="text-sm">rohit.sharma@growquest.in</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
