function Messages({ Sender, Content, SenderName }) {
  const CurrentUser = sessionStorage.getItem('Id');
  const isCurrentUser = Sender === CurrentUser;

  return (
    <div className="flex-grow py-2 md:py-4 space-y-1 md:space-y-2 px-2 md:px-3">
      {isCurrentUser ? (
        // Message from the current user
        <div className="flex space-x-2 md:space-x-3 items-start">
          <div className="w-full">
            <div className="mt-1 bg-[#7C9ED9] text-white py-1 md:py-2 px-4 md:px-5 rounded-lg shadow-md w-fit max-w-[75%] md:max-w-xs">
              <p className="text-[10px] md:text-xs font-medium text-[#F8F8FF]">{SenderName || 'You'}</p>
              <p className="whitespace-normal break-words text-[10px] md:text-sm">{Content}</p>
            </div>
          </div>
        </div>
      ) : (
        // Message from another user
        <div className="flex justify-end space-x-2 md:space-x-3 items-start">
          <div>
            <div className="mt-1 bg-gray-100 dark:bg-[#F4F4F4] text-gray-800 dark:text-black p-1 md:p-2 rounded-lg shadow-md max-w-[75%] md:max-w-xs">
              <p className="text-[10px] md:text-xs font-medium text-[#7C9ED9]">{SenderName || 'Member'}</p>
              <p className="whitespace-normal break-words text-[10px] md:text-sm">{Content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;
