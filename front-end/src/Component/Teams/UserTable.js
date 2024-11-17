import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const CurrentUser = '673844b58db164cad9d63751'; 
        const response = await axios.get('http://localhost:5000/api/teams', { 
          params: { CurrentUser } 
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-semibold text-gray-600 border">FirstName</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600 border">LastName</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600 border">Email</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600 border">Password</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600 border">Gender</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600 border">Date of Birth</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600 border">Phone Number</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{user.FirstName}</td>
              <td className="px-4 py-2 border">{user.LastName}</td>
              <td className="px-4 py-2 border">{user.Email}</td>
              <td className="px-4 py-2 border">{user.Password}</td>
              <td className="px-4 py-2 border">{user.Gender}</td>
              <td className="px-4 py-2 border">{new Date(user.DOB).toLocaleDateString()}</td>
              <td className="px-4 py-2 border">{user.Phone}</td>
              <td className="px-4 py-2 border">{user.Role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
