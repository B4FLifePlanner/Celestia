import React from 'react'
import Send from '../../imgs/send.svg'

function Chat() {
  return (
    <div className="max-w-full h-screen mx-auto bg-white dark:bg-[#1f2937] flex flex-col ">

      <div className="relative h-48 overflow-hidden">
        <img src="" alt="Background Image" className="object-cover w-full h-full" />
      </div>

      <div className="py-4 space-y-4 flex-grow overflow-auto ">
        <div className="flex space-x-3 items-start">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <div className="mt-1 bg-blue-500 text-white p-2 rounded-lg shadow-md max-w-xs">
              <p className="text-xs font-medium text-gray-600 dark:text-blue-300">Member 1</p>

              <p>Hello Bossy</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 items-start">
          <div>
            <p className="text-xs font-medium text-gray-500 dark:text-green-300">Manager</p>
            <div className="mt-1 bg-gray-100 dark:bg-[#374151] text-gray-800 dark:text-gray-200 p-2 rounded-lg shadow-md max-w-xs">
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>

        <div className="flex space-x-3 items-start">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <p className="text-xs font-medium text-gray-600 dark:text-blue-300">Member 1</p>
            <div className="mt-1 bg-blue-500 text-white p-2 rounded-lg shadow-md max-w-xs">
              Hello Boss
            </div>
          </div>
        </div>

        <div className="flex space-x-3 items-start">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <p className="text-xs font-medium text-gray-600 dark:text-blue-300">Member 2</p>
            <div className="mt-1 bg-blue-500 text-white p-2 rounded-lg shadow-md max-w-xs">
              Hello Boss
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 items-start">
          <div>
            <p className="text-xs font-medium text-gray-500 dark:text-green-300">Manager</p>
            <div className="mt-1 bg-gray-100 dark:bg-[#374151] text-gray-800 dark:text-gray-200 p-2 rounded-lg shadow-md max-w-xs">
              Hello, how is your task?
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </div>

      <div className="flex items-center m-4 bg-gray-100 dark:bg-[#374151] p-2 rounded-full shadow-md">
        <input type="text" placeholder="Type a message..." className="flex-grow bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none px-2" />
        <button className="text-gray-500 dark:text-gray-400 px-2">
          <i className="fas fa-paperclip"></i>
        </button>
        <button className="text-gray-500 dark:text-gray-400 px-2">
          <i className="fas fa-microphone"></i>
        </button>
        <button className="text-blue-500 px-2">
          Send
        </button>
      </div>
    </div>
  )
}

export default Chat
