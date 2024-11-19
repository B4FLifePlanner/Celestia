import React from "react";
import { Link } from "react-router-dom";

function ToggleButton({ activeLink, onToggle }) {
    const handleToggle = (link) => {
        onToggle(link);
    };

    return (
        <div className="w-[220px] h-[35px] rounded-[30px] flex border-2 mt-[50px]">
            <Link
                onClick={() => handleToggle("personal")} 
                className={`${activeLink === "personal" ? "bg-toggleButton text-textBlue" : ""} w-[110px] flex justify-center items-center rounded-[30px] duration-[0.4s]`}
            >
                Personal
            </Link>
            <Link
                onClick={() => handleToggle("work")} 
                className={`${activeLink === "work" ? "bg-toggleButton text-textBlue" : ""} w-[110px] flex justify-center items-center rounded-[30px] duration-[0.4s]`}
            >
                Work
            </Link>
        </div>
    );
}

export default ToggleButton;