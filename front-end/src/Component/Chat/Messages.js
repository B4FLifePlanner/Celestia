import React from 'react'

function Messages(obj) {
    const CurrentUser = ""
    return (
        <div className="flex-grow py-2 md:py-4 space-y-3 md:space-y-4 overflow-auto px-2 md:px-3">
            {obj.Sender == CurrentUser ? (
              <div className="flex space-x-2 md:space-x-3 items-start">
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gray-300"></div>
              <div className="w-full">
                <div className="mt-1 bg-[#7C9ED9] text-white py-1 md:py-2 px-4 md:px-5 rounded-lg shadow-md w-fit max-w-[75%] md:max-w-xs">
                  <p className="text-[10px] md:text-xs font-medium text-[#F8F8FF] dark:text-[#F8F8FF]">Manager</p>
                  <p className="whitespace-normal break-words text-[10px] md:text-sm text-black">
                    {obj.content}
                  </p>
                </div>
              </div>
            </div>)
                :
                (<div className="flex justify-end space-x-2 md:space-x-3 items-start">
            <div>
              <div className="mt-1 bg-gray-100 dark:bg-[#F4F4F4] text-gray-800 dark:text-black p-1 md:p-2 rounded-lg shadow-md max-w-[75%] md:max-w-xs">
                <p className="text-[10px] md:text-xs font-medium text-[#7C9ED9] dark:text-[#7C9ED9]">{}</p>
                <p className="whitespace-normal break-words text-[10px] md:text-sm">{obj.content}</p>
              </div>
            </div>
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gray-300"></div>
          </div>)


            }



        </div>
    )
}

export default Messages
