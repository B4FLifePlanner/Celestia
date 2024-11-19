import React from 'react';

function AddButton({ onClick , Action }) {
  return (
    <div>
    <button
      onClick={onClick}
      className="font-extrabold flex items-center px-4 py-2 bg-[#7C9ED9] text-white rounded-md hover:bg-blue-500 focus:outline-none"
    >
      <span className="mr-2 text-2xl font-extrabold">+</span>
      {Action}
    </button>
    </div>
  );
}

export default AddButton;
