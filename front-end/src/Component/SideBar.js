import React, {useState} from "react";
import book from './icons/bookLM.svg'
import list from './icons/list.svg'
import home from './icons/home.svg'
import logoBook from './icons/logoBook.svg'


function Sidebar() {
    // const [mode, setMode] = useState('personal')
    

    return (
        <div className="font-sans text-[#010B13] dark:text-darkSecondary flex h-screen w-[20%] flex-col bg-[#F8F8FF] dark:bg-darkSideBar bg-clip-border p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2">
                <img src={ logoBook} className="block w-4 h-4"  />
            </div>
            <nav className="flex min-w-[240px] h-[100%] flex-col gap-2 p-2 font-sans text-base font-normal">
                <div role="button"  className="flex w-full p-3 leading-tight rounded-lg hover:bg-[#E7EDF9] duration-500 outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ">
                    <div className="grid mr-4 place-items-center">
                        
                    </div>
                    <p className="font-bold ">Anna</p>
                </div>
                <div role="button" className="flex justify-self-start w-full p-3 leading-tight transition-all rounded-lg hover:bg-[#E7EDF9] duration-500 outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                        <img src={home} className="w-4 h-4" />
                    </div>
                    Home
                </div>

                {/* <ToggleSwitch mode={mode} setMode={setMode}/> */}
                <div className="w-[100%] h-[2] mt-10 mb-10 bg-gray-400">Switch</div>
                
                <div className="bg-[#010B13] h-[1px] w-[85%] self-center dark:bg-darkSecondary"></div>
                <div className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                        Personal Use
                    </div>

                </div>
                <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg hover:bg-[#E7EDF9] duration-500 outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                        <img src={book} className="w-4 h-4" />
                    </div>
                    Bookworm Zone
                </div>
                <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg hover:bg-[#E7EDF9] hover duration-500 outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                        <img src={list} className="w-4 h-4" />
                    </div>
                    To-Do-List
                </div>
                <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg hover:bg-[#E7EDF9] duration-500 outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                        
                    </div>
                    Travel Planner
                </div>
                
                <div className="bg-[#010B13] h-[1px] w-[85%] self-center dark:bg-darkSecondary"></div>
                <div className="mt-auto self-center"><button type="button" className="text-[#F8F8FF] duration-500 bg-[#7C9ED9] hover:bg-[#010B13] hover:dark:text-darkPrimary hover:dark:bg-darkHover rounded-lg w-fit h-fit px-5 py-1 font-bold flex items-center justify-center">Logout</button></div>
            </nav>
        </div>
    );
}

export default Sidebar
