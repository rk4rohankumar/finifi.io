import React from 'react';
import { IoIosArrowBack, IoMdInformationCircleOutline, IoMdTime, IoMdChatbubbles, IoMdDownload, IoMdShare, IoMdSave, IoIosArrowForward } from 'react-icons/io';
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { LiaShareSolid } from "react-icons/lia";

const Topbar = ({ status }) => {
  const isWaiting = status === 'waiting';

  return (
    <div className={`flex flex-col bg-gray-100 text-gray-800 shadow-lg ${isWaiting ? 'border-t-4 border-yellow-500' : ''}`}>
      
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <IoIosArrowBack size={28} className="font-bold" />
          <span className="text-xl font-bold">OlaMoney Technologies India Pvt Ltd</span>
          {isWaiting && (
        <div className="px-4 py-2 bg-blue-50 rounded-full border-2 border-blue-600 text-blue-800 font-semibold">
          Awaiting Business Proposal
        </div> 
      )}
          <IoMdInformationCircleOutline size={28} className="font-bold" />
          <BsFileText size={28} className="font-bold" />
          <MdOutlineHistory size={28} className="font-bold" />
          <IoChatbubbleOutline size={28} className="font-bold" />
          <IoMdDownload size={28} className="font-bold" />
          <LiaShareSolid size={28} className="font-bold" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-gray-200 text-green-600  font-bold px-4 py-2 rounded">
            <IoMdSave size={24} className="font-bold" />
            <span>Save Draft</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded">
            <span>Submit</span>
            <IoIosArrowForward size={24} className="font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
