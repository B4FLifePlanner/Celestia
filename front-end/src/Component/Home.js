import React, { useState, useEffect, useRef } from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="Home flex h-auto">
            <button 
                    onClick={toggleSidebar} 
                    className="md:hidden p-2 rounded-md bg-blue-500 fixed top-4 left-[85%]"
                >
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        />
                    </svg>
                </button>
            <SideBar isSidebarOpen={isSidebarOpen} sidebarRef={sidebarRef} />
            <div className={`flex-1 p-4 bg-lightMode md:ml-[255px] h-screen overflow-auto transition-all duration-300 ${isSidebarOpen ? '' : 'w-full'}`}>
                <Outlet />
            </div>
        </div>
    );
}

export default Home;