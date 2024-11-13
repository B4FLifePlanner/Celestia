import React, { useState } from 'react';

function AddTask() {
  const [formData, setFormData] = useState({
    title: '',
    info: '',
    assignedTo: '',
    deadline: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/Add-Task?team_Id=YOUR_TEAM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Task added successfully!');
        setErrorMessage('');
        setFormData({ title: '', info: '', assignedTo: '', deadline: '' });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Failed to add task');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-[#e7edf9] dark:bg-gray-800 p-10 rounded-lg shadow-md w-full max-w-xl">
        <div className="flex items-center space-x-2 mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Add Task</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Task Title:</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={formData.title}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Task Info:</label>
            <textarea
              name="info"
              onChange={handleChange}
              value={formData.info}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900"
              required
            />
          </div>
          <fieldset className="mb-6 ">
            <legend className=" text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Task Performer:</legend>
            <div className="mt-2 space-y-2 flex justify-between">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="assignedTo"
                  value="Person 1"
                  onChange={handleChange}
                  checked={formData.assignedTo === 'Person 1'}
                  className="mr-2"
                />
                Person 1
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="assignedTo"
                  value="Person 2"
                  onChange={handleChange}
                  checked={formData.assignedTo === 'Person 2'}
                  className="mr-2"
                />
                Person 2
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="assignedTo"
                  value="Person 3"
                  onChange={handleChange}
                  checked={formData.assignedTo === 'Person 3'}
                  className="mr-2"
                />
                Person 3
              </label>
            </div>
          </fieldset>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Deadline:</label>
            <input
              type="date"
              name="deadline"
              onChange={handleChange}
              value={formData.deadline}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900"
              required
            />
          </div>

          <div className="flex justify-end mt-10 gap-5">
            <button
              type="button"
              onClick={() => setFormData({ title: '', info: '', assignedTo: '', deadline: '' })}
              className="w-2/6 bg-white dark:bg-white text-gray-800 dark:text-gray-900 font-semibold py-2 px-4 rounded hover:bg-gray-400 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-2/6 bg-[#7c9ed9] dark:bg-[#7c9ed9] text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
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
