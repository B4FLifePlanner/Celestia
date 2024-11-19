import React from "react";
import axios from "axios"; // Ensure axios is installed and imported

function TaskDetail({ Task , onClose }) {
  const id =Task._id
  const handleUpdateStatus = async (status) => {
    try {
      const response = await axios.patch("http://localhost:5000/work/tasks/status", { status },{
        params: { id },
    });
      console.log('Status updated:', response.data);
      onClose();
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update task status.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-[#E7EDF9] p-6 max-w-md w-full rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white font-bold px-2 py-1 rounded-full hover:bg-red-600 transition"
        >
          X
        </button>

        <h2 className="text-xl font-bold mb-4">{Task.Title}</h2>

        <div className="mb-6">
          <h3 className="text-sm font-bold">Task Info</h3>
          <p className="mt-2 border-t border-black pt-2">{Task.Info}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-bold">Task Performer</h3>
          <p className="mt-2 border-t border-black pt-2">
            {Task.AssignedToNames.map(name => ` ${name}, `)}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-bold">Deadline Date</h3>
          <p className="mt-2 border-t border-black pt-2">{Task.Deadline}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-bold">Received Task</h3>
          <div className="mt-2 flex items-center border-t border-black pt-2">
            <a href="." className="text-blue-500 underline mr-4">
              API Receiving Message.js
            </a>
            <button
              onClick={() => handleUpdateStatus('Accepted')}
              className="bg-green-500 text-white px-3 py-1 rounded-full mr-2 hover:bg-green-600 transition"
            >
              Accept
            </button>
            <button
              onClick={() => handleUpdateStatus('Rejected')}
              className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
            >
              Reject
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold">Leader Notes</h3>
          <p className="mt-2 border-t border-black pt-2">HBD B HBD</p>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
