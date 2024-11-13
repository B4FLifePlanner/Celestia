import React from 'react';

function UserTable({users}) {
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
              <td className="px-4 py-2 border">{user.firstName}</td>
              <td className="px-4 py-2 border">{user.lastName}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.password}</td>
              <td className="px-4 py-2 border">{user.gender}</td>
              <td className="px-4 py-2 border">{user.dob}</td>
              <td className="px-4 py-2 border">{user.phone}</td>
              <td className="px-4 py-2 border">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
