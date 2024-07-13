import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ToggleButton from './ToggleButton'

const BusinessDetailCard = ({handleAddAttachment}) => {
  const [isGstRegistered, setIsGstRegistered] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPolicy, setSelectedPolicy] = useState('');
  const [fileGSTCertificate, setFileGSTCertificate] = useState(null);
  const [filePANAttachment, setFilePANAttachment] = useState(null);
  
  const toggleGstRegistered = () => {
    setIsGstRegistered((prev) => !prev);
  };

  const handleGSTCertificateChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileGSTCertificate(file);
      const attachment = {
        name: 'GST Certificate',
        file: file,
        url: URL.createObjectURL(file)
      }
      handleAddAttachment(attachment);
    }
  };

  const handlePANAttachmentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePANAttachment(file);
      const attachment = {
        name: 'PAN Attachment',
        file: file,
        url: URL.createObjectURL(file)
      }
      handleAddAttachment(attachment);
    }
  };



  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    // to reset city selection when state changes
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handlePolicyChange = (e) => {
    setSelectedPolicy(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-lg font-semibold mb-4">Business Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Layer 1 */}
        <div>
          <label htmlFor="vendorId" className="block mb-1">
            Vendor ID
          </label>
          <input
            type="text"
            id="vendorId"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Vendor ID"
          />
        </div>
        <div>
          <label htmlFor="legalName" className="block mb-1">
            Legal Name*
          </label>
          <input
            type="text"
            id="legalName"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Legal Name"
            required    
          />
        </div>
        <div>
          <label htmlFor="tradeName" className="block mb-1">
            Trade Name*
          </label>
          <input
            type="text"
            id="tradeName"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Trade Name"
            required    
          />
        </div>
        <div>
          <label htmlFor="vendorState" className="block mb-1">
            Vendor State*
          </label>
          <select
            id="vendorState"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={selectedState}
            onChange={handleStateChange}
            required    
          >
            <option value="">Select State</option>
            {/*to be replaced with actual state options from list*/}
            <option value="Maharashtra">Maharashtra</option>
            <option value="Gujarat">Gujarat</option>
            {/*  more states to be added */}
          </select>
        </div>
        <div>
          <label htmlFor="vendorCity" className="block mb-1">
            Vendor Location*
          </label>
          <select
            id="vendorCity"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedState}
            required    
          >
            <option value="">Select City</option>
            {/* to replace with actual city options based on selectedState */}
            {selectedState === 'Maharashtra' && (
              <>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
              </>
            )}
            {selectedState === 'Gujarat' && (
              <>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
              </>
            )}
            {/* cities list to be provided */}
          </select>
        </div>
        {/* Layer 2 */}
        <div className="col-span-5 md:col-span-1">
          <label className="block mb-1">GST Registered</label>
          <div className="p-8">
            <label
              htmlFor="1"
              className={`flex ${isGstRegistered ? 'bg-green-600' : 'bg-gray-400'} cursor-pointer relative w-20 h-10 rounded-full`}
            >
              <input
                type="checkbox"
                name="check"
                id="1"
                className="sr-only peer"
                checked={isGstRegistered}
                onChange={toggleGstRegistered}
              />
              <span className="w-2/5 h-4/5 bg-gray-100 absolute rounded-full left-1 top-1 peer-checked:left-11 transition-all duration-500"></span>
            </label>
          </div>
        </div>
        {isGstRegistered && (
           <div className="col-span-5 md:col-span-1">
           <label htmlFor="gstCertificate" className="block mb-1">
             GST Certificate*
           </label>
           <div className="relative border bg-blue-100 border-blue-300 rounded-md px-3 py-2 w-full cursor-pointer">
             <input
               type="file"
               id="gstCertificate"
               className="absolute inset-0 opacity-0 w-full h-full z-50 cursor-pointer"
               onChange={handleGSTCertificateChange}
               required
             />
             <div className="flex items-center justify-center w-full h-full text-gray-500 pointer-events-none">
               {fileGSTCertificate ? fileGSTCertificate.name : 'Browse or drop file'}
             </div>
           </div>
         </div>
        )}
        <div className="col-span-5 md:col-span-1">
          <label htmlFor="paymentTerms" className="block mb-1">
            Payment Terms
          </label>
          <input
            type="text"
            id="paymentTerms"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Payment Terms"
          />
        </div>
        <div className="col-span-5 md:col-span-1 bg">
           <label htmlFor="panAttachment" className="block mb-1">
             PAN attachment*
           </label>
           <div className="relative border border-blue-300 rounded-md px-3 py-2 w-full bg-blue-100 cursor-pointer">
             <input
               type="file"
               id="panAttachment"
               className="absolute inset-0 opacity-0 w-full h-full z-50 cursor-pointer"
               onChange={handlePANAttachmentChange}
               required
             />
             <div className="flex items-center justify-center w-full h-full  text-gray-500 pointer-events-none">
               {filePANAttachment ? filePANAttachment.name : 'Browse or drop file'}
             </div>
           </div>
         </div>
        <div className="col-span-5 md:col-span-1">
          <label htmlFor="policy" className="block mb-1">
            Policy*
          </label>
          <select
            id="policy"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={selectedPolicy}
            onChange={handlePolicyChange}
            required    
          >
            <option value="">Select Policy</option>
            {/* to be replace with actual policy options */}
            <option value="Policy 1">Policy 1</option>
            <option value="Policy 2">Policy 2</option>
            {/*  more policies  */}
          </select>
        </div>
        <div className="col-span-5">
          <label htmlFor="address" className="block mb-1">
            Address
          </label>
          <textarea
            id="address"
            className="border border-gray-300 rounded-md px-3 pt-2 w-full  resize-none"
            placeholder="Enter Address"
            
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailCard;
