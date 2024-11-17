import React from 'react';
import Send from '../../imgs/send.svg';
import attachment from '../../imgs/Vector.svg';
import record from '../../imgs/mic.svg';
import background from '../../imgs/cover-pic.svg';
function Chat() {
  return (
    <div className="w-full h-screen mx-auto bg-[#E7EDF9] dark:bg-[#010B13] flex flex-col">
      
      {/* Background Image */}
      <div className="w-full h-32 overflow-hidden">
        <img src={background} alt="Background Image" className="w-full h-full object-cover" />
      </div>

      {/* Chat Input */}
      <div className="w-full p-2 md:p-4 bg-[#E7EDF9] dark:bg-[#010B13] flex items-center gap-8 mt-auto">
        <div className="flex flex-grow items-center bg-gray-100 dark:bg-[#EEEEEE] p-1 md:p-2 rounded-full shadow-md">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-grow bg-transparent text-[10px] md:text-sm text-gray-800 focus:outline-none px-1 md:px-2"
          />
          <button className="text-gray-500 dark:text-gray-400 px-1 md:px-2">
            <img src={attachment} alt="Attach" />
          </button>
          <button className="text-gray-500 dark:text-gray-400 px-1 md:px-2">
            <img src={record} alt="Record" />
          </button>
        </div>
        <button className="ml-1 md:ml-2 text-blue-500">
          <img src={Send} alt="Send" />
        </button>
      </div>
    </div>
  );
}

export default Chat;