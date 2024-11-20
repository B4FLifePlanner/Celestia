import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cover from '../../imgs/bg-cover-to-do.svg';
import ToDo from '../../imgs/To-Do-List Icon.svg';
import ToDoInfo from './To-Do-Add-&Info';
const ToDoList = () => {
    const [selectedTask, setSelectedTask] = useState({});
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);
    const CurrentUser = '6739d745ced132b914ce971f';
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


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
    useEffect(() => {
        fetchToDoTasks();
    }, [CurrentUser]);

    const getTasksForDay = (day) => {
        const currentDayIndex = daysOfWeek.indexOf(day);
        return tasks.filter((task) => {
            const deadlineDate = new Date(task.Deadline);
            return deadlineDate.getDay() === currentDayIndex;
        });
    };

    const handleTaskStatusChange = async (task, isChecked) => {
        const updatedStatus = isChecked ? "Completed" : "Not Completed";

        try {
            await axios.patch(
                `http://localhost:5000/api/users/update-task-status`,
                { taskId: task._id, newStatus: updatedStatus },
                { params: { CurrentUser } }
            );

            setTasks((prevTasks) =>
                prevTasks.map((t) =>
                    t._id === task._id ? { ...t, Status: updatedStatus } : t
                )
            );
        } catch (error) {
            console.error("Failed to update task status:", error);
        }
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task);
        setShowAddTask(true);
    };

    const handleAddTaskClick = (day) => {
        const nearestDate = getNearestDateForDay(day);
        setSelectedTask({ Name: "", Description: "", Status: "Not Completed", Deadline: nearestDate });
        setShowAddTask(true);

    };


    const closeTaskDetails = () => {
        setShowAddTask(false);
        fetchToDoTasks()
    };

    const getNearestDateForDay = (day) => {
        const today = new Date();
        const currentDay = today.getDay();
        const targetDayIndex = daysOfWeek.indexOf(day);

        let diff = targetDayIndex - currentDay;
        if (diff <= 0) {
            diff += 7;
        }

        const nearestDate = new Date(today);
        nearestDate.setDate(today.getDate() + diff);
        return nearestDate.toISOString().split('T')[0];
    };

    return (
        <div className={`bg-[#E7EDF9] dark:bg-[#010B13] h-full ${showAddTask ? 'w-1/2' : 'w-full'} flex relative `}>
            {/* Main Content */}
            <div className="w-full">
                <div className="relative h-32 md:h-48 overflow-hidden hidden sm:block">
                    <img src={cover} alt="Background" className="object-cover w-full h-full" />
                </div>

                <div className="flex flex-col p-24 gap-10">
                    <div className="font-bold text-3xl flex justify-start gap-3 dark:text-[#F8F8FF]">
                        <img src={ToDo} alt="To-Do Icon" />
                        To-Do-List
                    </div>
                    <p className="text-[24px] dark:text-[#F8F8FF]">Organizing your life hasn’t been easier:</p>

                    <div className="flex flex-wrap justify-start gap-8">
                        {daysOfWeek.map((day) => {
                            const dayTasks = getTasksForDay(day);
                            return (
                                <div key={day} className="card flex flex-col gap-5 rounded-lg w-60 py-5">
                                    <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-[#F8F8FF] font-bold py-4">
                                        {day}
                                    </h2>
                                    <div className="flex flex-col space-y-5">
                                        {dayTasks.length > 0 ? (
                                            <ul className="space-y-5">
                                                {dayTasks.map((task) => (
                                                    <li
                                                        key={task._id}
                                                        className="flex items-center space-x-2 cursor-pointer"

                                                    >
                                                        <input
                                                            type="checkbox"
                                                            className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 peer"
                                                            checked={task.Status === "Completed"}
                                                            onChange={(e) =>
                                                                handleTaskStatusChange(task, e.target.checked)
                                                            }

                                                        />
                                                        <label className="text-sm text-[#475569] dark:text-[#cbd5e1] font-semibold peer-checked:line-through"
                                                            onClick={() => handleTaskClick(task)}>
                                                            {task.Name}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                        <button
                                            className="w-4/6 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-1 sm:py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-4 sm:space-x-8 px-4 sm:px-6"
                                            onClick={() => handleAddTaskClick(day)}
                                        >
                                            <div className="flex sm:flex-row flex-col items-center space-x-2">

                                                <span className="material-symbols-outlined text-sm sm:text-base">add</span>
                                                <span className="font-semibold text-sm sm:text-base">Add Task</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Slide-in Add_To_Do component */}
            {showAddTask && (
                <div
                    className={`fixed top-0 right-0 h-full w-full sm:w-1/2 bg-white dark:bg-[#010B13] shadow-lg z-50 transition-transform duration-1000 ease-in-out ${showAddTask ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <ToDoInfo
                        task={selectedTask}
                        onClose={closeTaskDetails} // Close handler
                    />
                </div>
            )}
        </div>
    );
};

export default ToDoList;
