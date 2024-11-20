import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDoStatus from "./ToDoStatus";
import AddButton from "./AddButton";
function ToDoInfo({ task = {}, onClose }) {
    const [currentTask, setCurrentTask] = useState(task);


    useEffect(() => {
        if (!task) {
            setCurrentTask({});
        } else {
            setCurrentTask(task); // Reset state for new tasks
        }
    }, [task]);

    const formatDate = (deadline) => {
        if (!deadline) return "";
        const date = new Date(deadline);
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "Deadline") {
            // If the input is Deadline, we keep the Date object in the state
            setCurrentTask((prevTask) => ({
                ...prevTask,
                [name]: new Date(value), // Store the Date object, not a string
            }));
        } else {
            setCurrentTask((prevTask) => ({
                ...prevTask,
                [name]: value,
            }));
        }
    };

    const handleDone = async () => {

        const taskToSend = {
            ...currentTask,
            Deadline: currentTask.Deadline, // Send it as a Date object
        };

        try {
            const CurrentUser = '6739d745ced132b914ce971f'

            const response = await axios.post("http://localhost:5000/api/users/add-To-Do", taskToSend, {
                params: { CurrentUser }
            });

            if(response) {onClose()}
            
            console.log("Task added successfully:", response.data);
            
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleDelete = async () => {

        try {
            const CurrentUser = '6739d745ced132b914ce971f'

            const response = await axios.delete("http://localhost:5000/api/users/delete-task" ,{
                params: { CurrentUser,
                    CurrentTask: JSON.stringify(currentTask) } 
            
            });
            console.log("Task added successfully:", response.data);
            onClose();
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <div className="w-full h-screen flex flex-col p-4 md:p-10 lg:p-20 gap-y-4 font-nunito font-bold bg-[#E7EDF9] dark:bg-[#010B13] text-[#010B13] relative transition-transform duration-1000 ease-in-out">
            <button
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 dark:text-[#F8F8FF] text-xl"
                onClick={onClose}
            >
                &times;
            </button>
            <h1 className="bg-transparent font-extrabold text-2xl dark:text-[#F8F8FF] md:text-4xl border-none focus:outline-none resize-none h-16 md:h-20 lg:h-24 mb-2">
                Task:
            </h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="Name" className="md:w-1/6 dark:text-[#F8F8FF]">Name of Task</label>
                <input
                    type="text"
                    id="Name"
                    name="Name"
                    className="border-none bg-transparent focus:outline-none w-full md:w-auto text-gray-800 dark:text-[#F8F8FF]"
                    value={currentTask?.Name || ""}
                    onChange={handleInputChange}
                />
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="Description" className="md:w-1/6 dark:text-[#F8F8FF]">Description</label>
                <input
                    type="text"
                    id="Description"
                    name="Description"
                    className="border-none bg-transparent focus:outline-none w-full md:w-auto text-gray-800 dark:text-[#F8F8FF]"
                    value={currentTask?.Description || ""}
                    onChange={handleInputChange}
                />
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="Deadline" className="md:w-1/6 dark:text-[#F8F8FF]">Status</label>
                <ToDoStatus
                    initialStatus={currentTask?.Status || "Not Completed"}
                    onChange={handleInputChange}
                />
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="Deadline" className="md:w-1/6 dark:text-[#F8F8FF]">Dead-Line</label>
                <input
                    type="text"
                    id="Deadline"
                    name="Deadline"
                    className="border-none bg-transparent focus:outline-none md:w-4/5 w-full text-gray-800 dark:text-[#F8F8FF]"
                    value={formatDate(currentTask?.Deadline)}
                    onChange={handleInputChange}
                    readOnly
                />
            </div>
            <div className="flex gap-x-2 mt-4 md:mt-6 self-center md:self-end">
                <AddButton textColor="#E7EDF9" bgColor="#FF0606" hoverColor="#010B13" hoverText="#fff" text="Delete" onClick={handleDelete}  />
                <AddButton textColor="#E7EDF9" bgColor="#7C9ED9" hoverColor="#010B13" hoverText="#fff" text="Done" onClick={handleDone}  />
            </div>
        </div>
    );
};

export default ToDoInfo;

