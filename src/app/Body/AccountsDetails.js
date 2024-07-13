import { useState } from 'react';

const AccountDetailsCard = ({handleAddAttachment}) => {
  const [selectedBank, setSelectedBank] = useState('');
  const [fileCancelledCheck, setFileCancelledCheck] = useState(null);

  const handleBankChange = (e) => {
    setSelectedBank(e.target.value);
  };

  const handleCancelledCheckChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileCancelledCheck(file);
      const attachment = {
        name: 'Cancelled Check',
        file: file,
        url: URL.createObjectURL(file)
      }
      handleAddAttachment(attachment);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-lg font-semibold mb-4">Account Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="selectBank" className="block mb-1">
            Select Bank*
          </label>
          <select
            id="selectBank"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={selectedBank}
            onChange={handleBankChange}
            required    
          >
            <option value="">Select Bank</option>
            {/* Replace with actual bank options */}
            <option value="State Bank of India">State Bank of India</option>
            <option value="ICICI Bank">ICICI Bank</option>
            {/* Add more banks as needed */}
          </select>
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="accountName" className="block mb-1">
            Account Name
          </label>
          <input
            type="text"
            id="accountName"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Account Name"
          />
        </div>
        
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="accountNumber" className="block mb-1">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter Account Number"
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="confirmAccountNumber" className="block mb-1">
            Confirm Account Number
          </label>
          <input
            type="text"
            id="confirmAccountNumber"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Confirm Account Number"
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="ifscCode" className="block mb-1">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifscCode"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter IFSC Code"
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <label htmlFor="cancelledCheck" className="block mb-1">
            Cancelled Check
          </label>
          <div className="relative border bg-blue-100 border-blue-300 rounded-md px-3 py-2 w-full cursor-pointer">
             <input
               type="file"
               id="cancelledCheck"
               className="absolute inset-0 opacity-0 w-full h-full z-50 cursor-pointer"
               onChange={handleCancelledCheckChange}
               required
             />
             <div className="flex items-center justify-center w-full h-full text-gray-500 pointer-events-none">
               {fileCancelledCheck ? fileCancelledCheck.name : 'Browse or drop file'}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsCard;
