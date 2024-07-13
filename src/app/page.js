import React from 'react';
import Navbar from './Header';
import Sidebar from './sidebar';
import Body from './Body/Body';


export default function VendorForm() {
  return (
    <div className="flex " >
      <Sidebar></Sidebar>
      <div className="w-screen">
      <Navbar></Navbar>
      <Body></Body>
      </div>
    </div>
  );
}

