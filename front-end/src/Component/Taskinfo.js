import React from "react";

function TaskDetail() {
  return (
    <div className="bg-[#E7EDF9] p-6 max-w-md mx-auto ">
      <h2 className="text-xl font-bold mb-4">Chat Application Project</h2>
      
      <div className="mb-6">
        <h3 className="text-sm font-bold ">Task Info</h3>
        <p className="mt-2 border-t border-black pt-2">
          Make an API that receives the user message and adds it to the messages array that belongs to the user.
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-bold ">Task Performer</h3>
        <p className="mt-2 border-t border-black pt-2">Anna Farah</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-bold ">Deadline Date:</h3>
        <p className="mt-2 border-t border-black pt-2">Mon 11/11/2024 12:00 PM</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-bold ">Received Task</h3>
        <div className="mt-2 flex items-center border-t border-black pt-2">
          <a
            href="."
            className="text-blue-500 underline mr-4"
          >
            API Receiving Message.js
          </a>
          <button className="bg-green-500 text-white px-3 py-1 rounded-full mr-2">
            Accept
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded-full">
            Reject
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-bold ">Leader Notes</h3>
        <p className="mt-2 border-t border-black pt-2">+ Review Anna’s task</p>
      </div>
    </div>
  );
}

export default TaskDetail;
