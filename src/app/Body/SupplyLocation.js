import { useState } from 'react';

const AdditionalLocationCard = () => {
  const [selectedState, setSelectedState] = useState('');
  const [fileLocationGSTInCertificate, setFileLocationGSTInCertificate] = useState(null);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleLocationGSTInCertificateChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileLocationGSTInCertificate(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-lg font-semibold mb-4">Additional Location for Supply</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="additionalLocationState" className="block mb-1">
            Select State*
          </label>
          <select
            id="additionalLocationState"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={selectedState}
            onChange={handleStateChange}
            required    
          >
            <option value="">Select State</option>
            {/* Replace with actual state options */}
            <option value="Maharashtra">Maharashtra</option>
            <option value="Gujarat">Gujarat</option>
            {/* Add more states as needed */}
          </select>
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="additionalLocation" className="block mb-1">
            Location
          </label>
          <input
            type="text"
            id="additionalLocation"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Location"
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="locationGSTIn" className="block mb-1">
            Location GSTIn
          </label>
          <input
            type="text"
            id="locationGSTIn"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Location GSTIn"
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="locationGSTInCertificate" className="block mb-1">
            Location GSTIn Certificate*
          </label>
          <div className="relative border bg-blue-100 border-blue-300 rounded-md px-3 py-2 w-full cursor-pointer">
             <input
               type="file"
               id="gstCertificate"
               className="absolute inset-0 opacity-0 w-full h-full z-50 cursor-pointer"
               onChange={handleLocationGSTInCertificateChange}
               required
             />
             <div className="flex items-center justify-center w-full h-full text-gray-500 pointer-events-none">
               {fileLocationGSTInCertificate ? fileLocationGSTInCertificate.name : 'Browse or drop file'}
             </div>
           </div>
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="pocName" className="block mb-1">
            POC Name*
          </label>
          <input
            type="text"
            id="pocName"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter POC Name"
            required    
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="pocDesignation" className="block mb-1">
            POC Designation*
          </label>
          <input
            type="text"
            id="pocDesignation"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter POC Designation"
            required    
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="pocEmail" className="block mb-1">
            POC Email ID*
          </label>
          <input
            type="email"
            id="pocEmail"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter POC Email ID"
            required    
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="pocMobile" className="block mb-1">
            POC Mobile Number*
          </label>
          <input
            type="tel"
            id="pocMobile"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter POC Mobile Number"
            required    
          />
        </div>
        <div className="col-span-4">
          <label htmlFor="address" className="block mb-1">
            Address*
          </label>
          <textarea
            id="address"
            className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 resize-none"
            placeholder="Enter Address"
            required    
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalLocationCard;
