import React, { useState } from 'react';
import AddButton from './AddButton';
import UserTable from './UserTable';
import AddMember from './AddMember'
import Banner from "../../icons/pexels-fauxels-3183150.jpg"


function TeamSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const Role = sessionStorage.getItem('role');
  return (
    
    <div className="flex-1 bg-[#E7EDF9] p-4"> 
      {/* Banner Section */}
      <div className="w-full h-32 overflow-hidden mb-4"> 
        <img
          className="w-full h-full object-cover"
          src={Banner}
          alt="Team Banner"
        />
      </div>

      {/* Button and Table Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Team Members</h2> {/* Optional header */}
        {Role == "manager" &&
          (<AddButton onClick = {handleOpenPopup} Action={"Add Member"}/>)}
      </div>
      {isPopupOpen &&(
        <AddMember  onClose={handleClosePopup}/>
      )}
      {/* User Table */}
      <UserTable />
    </div>

    
  );
}

export default TeamSection;
