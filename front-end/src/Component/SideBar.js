import React, { useState } from "react";
import Person2Icon from '@mui/icons-material/Person2';
import HomeIcon from '@mui/icons-material/Home';
import logoBook from "../icons/logoBook.svg";
import ToggleButton from "./ToggleButton";
import Work from "./Work";
import Personal from "./Personal";
import { Link } from "react-router-dom";

function SideBar({ isSidebarOpen, sidebarRef }) {
    const [activeLink, setActiveLink] = useState("personal");

    const handleToggle = (link) => {
        setActiveLink(link);
    };

    return (
        <aside
            ref={sidebarRef}
            id="separator-sidebar"
            className={`Sidebar text-textDark fixed h-[100%] left-0 z-10 w-64 transition-all duration-300 bg-gray-50  md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} p-4`}
            aria-label="Sidebar"
        >
            <img src={logoBook} alt="Logo" />
            <div className="mt-7">
                <ul>
                    <li className="mb-3 flex items-center">
                        <Person2Icon />
                        <span className="ml-2 font-bold">User-Name</span>
                    </li>
                    <Link to="/Home/Main">
                        <li className="mb-3 flex items-center">
                            <HomeIcon />
                            <span className="ml-2 font-bold">Home</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <ToggleButton activeLink={activeLink} onToggle={handleToggle} />
            <div className="flex justify-center">
                <div className="w-[200px] h-[2px] mt-10 bg-textDark"></div>
            </div>
            <div className="mt-10">
                {activeLink === "work" ? <Work /> : <Personal />}
            </div>
            <div className="flex justify-center">
                <div className="w-[200px] h-[2px] mt-8 bg-textDark"></div>
            </div>
        </aside>
    );
}

export default SideBar;