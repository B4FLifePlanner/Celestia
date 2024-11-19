import React, { useState } from 'react';
import Taskinfo from './Taskinfo'

function TaskCard({Task}) {
  const primarylightmode = "#F8F8FF";

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  return (
    <div className="border border-black rounded-3xl">
      <div style={{ backgroundColor: primarylightmode }} className="m-4 h-[280px] w-[250px] shadow-[4px_4px_0px_rgba(0,0,0,0.1)] border border-black rounded-2xl flex flex-col justify-between">
        <div className="flex-1 px-2 py-1">
          <h1 className="text-xl font-bold">{Task.Title}</h1>
          <p className="font-bold text-sm">Task Info:</p>
          <p className="text-sm overflow-hidden">{Task.Info}</p>
        </div>
        <div className="flex-1 px-2 py-1">
          <p className="text-sm font-bold">Who is Doing It:</p>
          <p className="text-sm">{Task.AssignedToNames.map(name => ` ${name} ,`)}</p>
        </div>
        <div className="flex-1 px-2 py-1">
          <p className="font-bold text-sm">Deadline Date:</p>
          <p className="text-sm">{Task.Deadline}</p>
        </div>
        <div className="flex-1 px-2 py-1">
          <p className="text-sm">Status: <span className='text-blue-500 font-bold'>{Task.Status}</span></p>
        </div>
        <div className="flex px-2 py-2">
          <button onClick={handleOpenPopup} className="text-blue-500 font-bold">See More Info</button>
        </div>
      </div>
      <div>
      {isPopupOpen &&(
        <Taskinfo Task={Task}  onClose={handleClosePopup}/>
      )}
      </div>
    </div>
  );
}

export default TaskCard;
