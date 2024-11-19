import React, { useEffect, useState } from 'react';
import Banner from "../../icons/pexels-fauxels-3183150.jpg";
import AddButton from '../Teams/AddButton';
import TaskCard from './TaskCard'
import axios from 'axios';
import AddTask from './AddTask';

function TasksSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);
    const [tasks, setTasks] = useState([]);
    const CurrentUser = sessionStorage.getItem('Id'); 
    const Role = sessionStorage.getItem('role');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/work/tasks', {
                    params: { CurrentUser },
                });
                setTasks(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, [CurrentUser]); 

    return (
        <div className="flex-1 bg-[#E7EDF9] p-4">
   
            <div className="w-full h-32 overflow-hidden mb-4">
                <img
                    className="w-full h-full object-cover"
                    src={Banner}
                    alt="Team Banner"
                />
            </div>

           
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Team Tasks</h2>
                {Role == "manager" &&(<AddButton onClick={handleOpenPopup} Action={"Add Task"} />)}
                
            </div>
            {isPopupOpen && (<AddTask onClose={handleClosePopup}/>)}
            <div className="flex flex-wrap justify-between gap-4 p-4">
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <TaskCard key={index} Task={task} />
                    ))
                ) : (
                    <p>No tasks available</p>
                )}
            </div>
        </div>
    );
}

export default TasksSection;
