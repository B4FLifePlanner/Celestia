import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cover from '../../imgs/bg-cover-to-do.svg';
import ToDo from '../../imgs/To-Do-List Icon.svg';

const Main_ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const CurrentUser = '6739d745ced132b914ce971f';
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    useEffect(() => {
        const fetchToDoTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users/get-tasks', {
                    params: { CurrentUser },
                });
                const tasks = response.data;
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchToDoTasks();
    }, [CurrentUser]);

    const getTasksForDay = (day) => {
        const currentDayIndex = daysOfWeek.indexOf(day);
        return tasks.filter((task) => {
            const deadlineDate = new Date(task.Deadline);
            return deadlineDate.getDay() === currentDayIndex;
        });
    };

    const handleTaskStatusChange = (task, isChecked) => {
        setTasks((prevTasks) =>
            prevTasks.map((t) =>
                t === task ? { ...t, Status: isChecked ? "Completed" : "Not Completed" } : t
            )
        );
    };

    return (
        <div className="bg-[#E7EDF9] dark:bg-[#010B13] h-full ">
            {/* Cover image */}
            <div className="relative h-32 md:h-48 overflow-hidden hidden sm:block">
                <img src={cover} alt="Background Image" className="object-cover w-full h-full" />
            </div>

            <div className="flex flex-col p-24 gap-10">
                <div className="font-bold text-3xl flex justify-start gap-3 dark:text-[#F8F8FF]">
                    <img src={ToDo} alt="To-Do Icon" />
                    To-Do-List
                </div>
                <p className="text-[24px] dark:text-[#F8F8FF]">Organizing your life hasn’t been easier:</p>

                {/* Main To-Do Section */}
                <div className="flex flex-wrap justify-start gap-8">
                    {daysOfWeek.map((day) => {
                        const dayTasks = getTasksForDay(day);
                        return (
                            <div key={day} className="card flex flex-col gap-5 rounded-lg w-60 py-5">
                                <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-[#F8F8FF] font-bold py-4">
                                    {day}
                                </h2>
                                <div className="flex flex-col">
                                    {dayTasks.length > 0 ? (
                                        <ul className="space-y-5">
                                            {dayTasks.map((task) => (
                                                <li
                                                    key={task.id}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 peer"
                                                        checked={task.Status === "Completed"} // Check if task status is "Completed"
                                                        onChange={(e) => handleTaskStatusChange(task, e.target.checked)} // Handle status change when toggled
                                                    />
                                                    <label className="text-sm text-[#475569] dark:text-[#cbd5e1] font-semibold peer-checked:line-through">
                                                        {task.Name}
                                                    </label>
                                                </li>
                                            ))}
                                            <button className="w-4/6 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-8 px-4">
                                                <div className="flex justify-start items-center space-x-2">
                                                    <span className="material-symbols-outlined">add</span>
                                                    <span className="font-semibold">Add Task</span>
                                                </div>
                                            </button>
                                        </ul>

                                    ) : (
                                        <div>
                                            <button className="w-4/6 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-8 px-4">
                                                <div className="flex justify-start items-center space-x-2">
                                                    <span className="material-symbols-outlined">add</span>
                                                    <span className="font-semibold">Add Task</span>
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Main_ToDo;
