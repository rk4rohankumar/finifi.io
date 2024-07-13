import React from 'react';
import { IoMdNotifications, IoMdCompass, IoMdDocument, IoMdNavigate, IoMdSettings } from 'react-icons/io';

const Sidebar = () => {
  return (
    <div className="h-screen w-20 flex flex-col bg-white  text-black shadow-lg">
      <div className="flex flex-col flex-grow items-center justify-top space-y-10 mt-10">
        <IoMdNotifications size={30} />
        <IoMdCompass size={30} />
        <IoMdDocument size={30} />
        <IoMdNavigate size={30} />
        <IoMdSettings size={30} />
      </div>
    </div>
  );
};

export default Sidebar;
