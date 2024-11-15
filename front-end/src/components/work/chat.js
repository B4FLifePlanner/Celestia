import React from 'react';
import Send from '../../imgs/send.svg';
import attachment from '../../imgs/Vector.svg';
import record from '../../imgs/mic.svg';
import background from '../../imgs/cover-pic.svg';

function Chat() {
  return (
    <div className="max-w-full h-screen mx-auto bg-[#E7EDF9] dark:bg-[#010B13] flex flex-col">

      {/* Background Image */}
      <div className="relative h-32 md:h-48 overflow-hidden hidden sm:block">
        <img src={background} alt="Background Image" className="object-cover w-full h-full" />
      </div>


      {/* Chat Messages */}
      <div className="py-2 md:py-4 space-y-3 md:space-y-4 flex-grow overflow-auto px-2 md:px-3">

        {/* Incoming Message */}
        <div className="flex space-x-2 md:space-x-3 items-start">
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gray-300"></div>
          <div className="w-full">
            <div className="mt-1 bg-[#7C9ED9] text-white py-1 md:py-2 px-4 md:px-5 rounded-lg shadow-md w-fit max-w-[75%] md:max-w-xs">
              <p className="text-[10px] md:text-xs font-medium text-[#F8F8FF] dark:text-[#F8F8FF]">Manager</p>
              <p className="whitespace-normal break-words text-[10px] md:text-sm text-black">
                Good Morning Boss.
              </p>
            </div>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex justify-end space-x-2 md:space-x-3 items-start">
          <div>
            <div className="mt-1 bg-gray-100 dark:bg-[#F4F4F4] text-gray-800 dark:text-black p-1 md:p-2 rounded-lg shadow-md max-w-[75%] md:max-w-xs">
              <p className="text-[10px] md:text-xs font-medium text-[#7C9ED9] dark:text-[#7C9ED9]">Manager</p>
              <p className="whitespace-normal break-words text-[10px] md:text-sm">Hello, How are your Tasks?</p>
            </div>
          </div>
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="flex items-center m-2 md:m-4 gap-8">
        <div className="flex flex-grow items-center bg-gray-100 dark:bg-[#EEEEEE] p-1 md:p-2 rounded-full shadow-md">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-grow bg-transparent text-[10px] md:text-sm text-gray-800  focus:outline-none px-1 md:px-2"
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
