import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MSMECard = ({handleAddAttachment}) => {
  const [isMsmeRegistered, setIsMsmeRegistered] = useState(false);
  const [isLowerException, setIsLowerException] = useState(false);
  const [fileMsmeAttachment, setFileMsmeAttachment] = useState(null);
  const [fileLowerExceptionCertificate, setFileLowerExceptionCertificate] = useState(null);
  const [ldcUpperLimit, setLdcUpperLimit] = useState("");
  const [ldcStartDate, setLdcStartDate] = useState("");
  const [ldcEndDate, setLdcEndDate] = useState("");

  const toggleMsmeRegistered = () => {
    setIsMsmeRegistered((prev) => !prev);
  };

  const toggleLowerException = () => {
    setIsLowerException((prev) => !prev);
  };

  const handleMsmeAttachmentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileMsmeAttachment(file);
    }const attachment = {
      name: 'MSME  Attachment',
      file: file,
      url: URL.createObjectURL(file)
    }
    handleAddAttachment(attachment);
  };

  const handleLowerExceptionCertificateChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileLowerExceptionCertificate(file);
      const attachment = {
        name: 'lower Exeption Attachment',
        file: file,
        url: URL.createObjectURL(file)
      }
      handleAddAttachment(attachment);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-lg font-semibold mb-4">MSME Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-1">
          <label className="block mb-1">MSME Registered</label>
          <div className="p-8">
            <label
              htmlFor="2"
              className={`flex ${isMsmeRegistered ? 'bg-green-600' : 'bg-gray-400'} cursor-pointer relative w-20 h-10 rounded-full`}
            >
              <input
                type="checkbox"
                name="check"
                id="2"
                className="sr-only peer"
                checked={isMsmeRegistered}
                onChange={toggleMsmeRegistered}
              />
              <span className="w-2/5 h-4/5 bg-gray-100 absolute rounded-full left-1 top-1 peer-checked:left-11 transition-all duration-500"></span>
            </label>
          </div>
        </div>
        {isMsmeRegistered && (
          <div className="col-span-5 md:col-span-1">
            <label htmlFor="msmeAttachment" className="block mb-1">
              MSME Attachment*
            </label>
            <div className="relative border bg-blue-100 border-blue-300 rounded-md px-3 py-2 w-full cursor-pointer">
             <input
               type="file"
               id="msmeAttachment"
               className="absolute inset-0 opacity-0 w-full h-full z-50 cursor-pointer"
               onChange={handleMsmeAttachmentChange}
               required
             />
             <div className="flex items-center justify-center w-full h-full text-gray-500 pointer-events-none">
               {fileMsmeAttachment ? fileMsmeAttachment.name : 'Browse or drop file'}
             </div>
           </div>
          </div>
        )}
        <div className="col-span-5 md:col-span-1">
          <label className="block mb-1">Lower Exception</label>
          <div className="p-8">
            <label
              htmlFor="3"
              className={`flex ${isLowerException ? 'bg-green-600' : 'bg-gray-400'} cursor-pointer relative w-20 h-10 rounded-full`}
            >
              <input
                type="checkbox"
                name="check"
                id="3"
                className="sr-only peer"
                checked={isLowerException}
                onChange={toggleLowerException}
              />
              <span className="w-2/5 h-4/5 bg-gray-100 absolute rounded-full left-1 top-1 peer-checked:left-11 transition-all duration-500"></span>
            </label>
          </div>
        </div>
        {isLowerException && (
          <div className="col-span-5 md:col-span-1">
            <label htmlFor="lowerExceptionCertificate" className="block mb-1">
              Lower Exception Certificate
            </label>
            <div className="relative border bg-blue-100 border-blue-300 rounded-md px-3 py-2 w-full cursor-pointer">
             <input
               type="file"
               id="lowerExceptionCertificate"
               className="absolute inset-0 opacity-0 w-full h-full z-50 cursor-pointer"
               onChange={handleLowerExceptionCertificateChange}
               required
             />
             <div className="flex items-center justify-center w-full h-full text-gray-500 pointer-events-none">
               {fileLowerExceptionCertificate ? fileLowerExceptionCertificate.name : 'Browse or drop file'}
             </div>
           </div>
          </div>
        )}
        <div className="col-span-5 md:col-span-1">
          <label htmlFor="ldcUpperLimit" className="block mb-1">
            LDC Upper Limit
          </label>
          <input
            type="text"
            id="ldcUpperLimit"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter LDC Upper Limit"
            value={ldcUpperLimit}
            onChange={(e) => setLdcUpperLimit(e.target.value)}
          />
        </div>
        <div className="col-span-5 md:col-span-1">
          <label htmlFor="ldcStartDate" className="block mb-1">
            LDC Start Date*
          </label>
          <input
            type="date"
            id="ldcStartDate"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={ldcStartDate}
            onChange={(e) => setLdcStartDate(e.target.value)}
            required
          />
        </div>
        <div className="col-span-5 md:col-span-1">
          <label htmlFor="ldcEndDate" className="block mb-1">
            LDC End Date*
          </label>
          <input
            type="date"
            id="ldcEndDate"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={ldcEndDate}
            onChange={(e) => setLdcEndDate(e.target.value)}
            required
          />
        </div>
        <div className="col-span-5 md:col-span-1">
          <label htmlFor="panNumber" className="block mb-1">
            PAN Number
          </label>
          <input
            type="text"
            id="panNumber"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter PAN Number"
          />
        </div>
      </div>
    </div>
  );
};

export default MSMECard;
