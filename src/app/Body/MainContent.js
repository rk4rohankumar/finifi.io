import React, { useState } from 'react';
import VendorForm from './VendorForm';
import { GrAttachment } from "react-icons/gr";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('VendorFormDetails');
  const [attachments, setAttachments] = useState([]);

  const handleAddAttachment = (newAttachment) => {
    setAttachments((prevAttachments) => {
      const index = prevAttachments.findIndex(
        (attachment) => attachment.name === newAttachment.name
      );
      if (index !== -1) {
        const updatedAttachments = [...prevAttachments];
        updatedAttachments[index] = newAttachment;
        return updatedAttachments;
      }
      return [...prevAttachments, newAttachment];
    });
  };

  return (
    <div className="flex">
      {/* First Container */}
      <div className="w-11/12 p-4 overflow-y-scroll h-screen">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${activeSection === 'VendorRequestDetails' ? 'text-black' : 'bg-gray-200'}`}
            onClick={() => setActiveSection('VendorRequestDetails')}
          >
            Vendor Request Details
          </button>
          <button
            className={`px-4 py-2 rounded ${activeSection === 'VendorFormDetails' ? 'text-black' : 'bg-gray-200'}`}
            onClick={() => setActiveSection('VendorFormDetails')}
          >
            Vendor Form Details
          </button>
          <button
            className={`px-4 py-2 rounded ${activeSection === 'AddFinanceDetails' ? 'text-black' : 'bg-gray-200'}`}
            onClick={() => setActiveSection('AddFinanceDetails')}
          >
            Add Finance Details
          </button>
        </div>

        <div className="border p-4 rounded bg-white shadow text-black">
          {activeSection === 'VendorRequestDetails' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Vendor Request Details</h2>
              <p>Content for Vendor Request Details goes here.</p>
            </div>
          )}
          {activeSection === 'VendorFormDetails' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Vendor Form Details</h2>
              <VendorForm addAttachment={handleAddAttachment} />
            </div>
          )}
          {activeSection === 'AddFinanceDetails' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Add Finance Details</h2>
              <p>Content for Add Finance Details goes here.</p>
            </div>
          )}
        </div>
      </div>
      {/* Second Container */}
      <div className="p-4 border-l text-black border-gray-200 h-screen md:min-w-64 overflow-y-auto">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-bold text-sky-600 mb-4 flex">Attachments <span className="ml-2"><GrAttachment /></span></h2>
          {attachments.length > 0 ? (
            attachments.map((attachment, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{attachment.name}</h3>
                <a href={attachment.url} target="_blank" rel="noopener noreferrer" className="bg-blue-200 p1-1 rounded my-4 hover:underline ">
                  {attachment.file.name}
                </a>
              </div>
            ))
          ) : (
            <p>No attachments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
