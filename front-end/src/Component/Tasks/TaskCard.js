import React from 'react';

function TaskCard({Task}) {
  const primarylightmode = "#F8F8FF";
  return (
    <div className="border border-black rounded-3xl">
      <div style={{ backgroundColor: primarylightmode }} className="m-4 h-[320px] w-[300px] shadow-[4px_4px_0px_rgba(0,0,0,0.1)] border border-black rounded-2xl flex flex-col justify-between">
        <div className="flex-1 px-2 py-1">
          <h1 className="text-xl font-bold">{Task.title}</h1>
          <p className="font-bold text-sm">Task Info:</p>
          <p className="text-sm">{Task.info}</p>
        </div>
        <div className="flex-1 px-2 py-1">
          <p className="text-sm font-bold">Who is Doing It:</p>
          <p className="text-sm">{Task.assignedTo}</p>
        </div>
        <div className="flex-1 px-2 py-1">
          <p className="font-bold text-sm">Deadline Date:</p>
          <p className="text-sm">{Task.deadline}</p>
        </div>
        <div className="flex-1 px-2 py-1">
          <p className="text-sm">Status: <span className='text-blue-500 font-bold'>{Task.status}</span></p>
        </div>
        <div className="flex px-2 py-2">
          <button className="text-blue-500 font-bold">See More Info</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
