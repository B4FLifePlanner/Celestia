import { useState, useEffect } from "react";
import Circle from '@mui/icons-material/Circle';

function ToDoStatus({ initialStatus }) {
    const [showOptions, setShowOptions] = useState(false);
    const [toDoStatus, settoDoStatus] = useState({
        color: "#908888",
        status: "Not Completed",
    });

    const statusOptions = [
        { color: "#908888", status: "Not Completed" },
        { color: "#C9E399", status: "Completed" },
    ];

    // Update state based on the initialStatus prop when the component mounts
    useEffect(() => {
        const matchingOption = statusOptions.find(option => option.status === initialStatus);
        if (matchingOption) {
            settoDoStatus(matchingOption);
        }
    }, [initialStatus]);

    const handleOptionClick = (option) => {
        settoDoStatus(option);
        setShowOptions(false); // Hide the options after selection
    };

    return (
        <div className="relative font-nunito">
            {/* Button to show options */}
            <button
                onClick={() => setShowOptions(!showOptions)}
                className="px-3 py-1 bg-[#010B13] dark:text-[#010B13] dark:bg-[#F8F8FF] text-[#F8F8FF] w-[60] h-[40] rounded-full flex items-center justify-center space-x-2"
            >
                <Circle style={{ color: toDoStatus.color, width: 20, height: 20 }} />
                <span className="font-semibold">{toDoStatus.status}</span>
            </button>

            {/* Options list */}
            {showOptions && (
                <div className="absolute mt-0.5 border rounded bg-[#010B13] text-[#F8F8FF] dark:text-[#010B13] dark:bg-[#F8F8FF] shadow-lg">
                    <ul>
                        {statusOptions.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="px-4 py-2 cursor-pointer hover:bg-[#061E30] dark:hover:bg-[#c2c2c2] flex items-center space-x-2"
                            >
                                <Circle style={{ color: option.color, width: 20, height: 20 }} />
                                <span>{option.status}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ToDoStatus;