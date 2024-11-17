import React, { useState, useEffect } from "react";
import axios from "axios";

function AddTask() {
  const [formData, setFormData] = useState({
    Title: "",
    Info: "",
    AssignedTo: [],
    Deadline: "",
  });
  const [members, setMembers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const CurrentUser = '6739d745ced132b914ce971f'

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get( `http://localhost:5000/api/teams/get-members`, {
          params: CurrentUser
        }
        );
        setMembers(response.data.members || []);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    }

    fetchTeamMembers();
  }, [CurrentUser]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        AssignedTo: checked
          ? [...prev.AssignedTo, value]
          : prev.AssignedTo.filter((member) => member !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/tasks/Add-Task",
        formData
      );

      if (response.status === 200) {
        setSuccessMessage("Task added successfully!");
        setErrorMessage("");
        setFormData({ Title: "", Info: "", AssignedTo: [], Deadline: "" });
      } else {
        setErrorMessage("Failed to add task");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-[#e7edf9] dark:bg-gray-800 p-10 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">Add Task</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Task Title:</label>
            <input
              type="text"
              name="Title"
              onChange={handleChange}
              value={formData.Title}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Task Info:</label>
            <textarea
              name="Info"
              onChange={handleChange}
              value={formData.Info}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Assign To:</label>
            {members.length > 0 ? (
              <div className="mt-2 space-y-2">
                {members.map((member) => (
                  <label key={member._id} className="flex items-center">
                    <input
                      type="checkbox"
                      name="AssignedTo"
                      value={member._id}
                      onChange={handleChange}
                      checked={formData.AssignedTo.includes(member._id)}
                      className="mr-2"
                    />
                    {`${member.FirstName} ${member.LastName}`}
                  </label>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No team members found.</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Deadline:</label>
            <input
              type="date"
              name="Deadline"
              onChange={handleChange}
              value={formData.Deadline}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900"
              required
            />
          </div>
          <div className="flex justify-end mt-10 gap-5">
            <button
              type="button"
              onClick={() => setFormData({ Title: "", Info: "", AssignedTo: [], Deadline: "" })}
              className="w-2/6 bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-2/6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Add Task
            </button>
          </div>
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default AddTask;

