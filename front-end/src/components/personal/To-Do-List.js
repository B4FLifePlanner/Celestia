import React, { useState } from 'react'
import cover from '../../imgs/bg-cover-to-do.svg'
import ToDo from '../../imgs/To-Do-List Icon.svg'

const Main = () => {


    return (
        <div className='bg-[#E7EDF9] dark:bg-[#010B13] h-full'>
            {/* Cover image */}
            <div className="relative h-32 md:h-48 overflow-hidden hidden sm:block">
                <img src={cover} alt="Background Image" className="object-cover w-full h-full" />
            </div>

            <div className='flex flex-col p-24 gap-10'>
                <div className="font-bold text-3xl flex justify-start gap-3 dark:text-[#F8F8FF]">
                    <img src={ToDo} />
                    To-Do-List
                </div> {/* Added font-bold */}
                <p className='text-[24px] dark:text-[#F8F8FF]'>Organizing your life hasn’t been easier:</p>

                {/* Main To-Do Section */}
                <div className='flex flex-wrap justify-start gap-8'>
                    {/* Monday */}
                    <div className='flex flex-col justify-between gap-5 rounded-lg w-60 py-5 h-auto'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-[#F8F8FF] font-bold py-4">Monday</h2> {/* Added font-bold */}
                        <div className='flex flex-col'>
                            <ul className='space-y-5'>
                                <li className="flex items-center space-x-2">
                                    <input type="checkbox" className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 peer" />
                                    <label className="text-sm text-[#475569] dark:text-[#cbd5e1] font-semibold peer-checked:line-through">Call Mark</label> {/* Added font-semibold */}
                                </li>
                                <li className="flex items-center space-x-2">
                                    <input type="checkbox" className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 peer" />
                                    <label className="text-sm text-[#475569] dark:text-[#cbd5e1] font-semibold peer-checked:line-through">Go Shopping</label> {/* Added font-semibold */}
                                </li>
                                <li className="flex items-center space-x-2">
                                    <input type="checkbox" className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 peer" />
                                    <label className="text-sm text-[#475569] dark:text-[#cbd5e1] font-semibold peer-checked:line-through">Cook Lunch</label> {/* Added font-semibold */}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="w-4/5 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-8 px-4">
                                <div className='flex justify-start items-center space-x-4'>
                                    <span class="material-symbols-outlined">
                                        add
                                    </span>
                                    <span className="font-semibold">
                                        Add Task</span>
                                </div>
                                {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    {/* Repeat for other days of the week */}
                    <div className='card flex flex-col gap-10 rounded-lg w-60 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-[#F8F8FF] font-bold py-4">Tuesday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-4/5 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-8 px-4">
                                <div className='flex justify-start items-center space-x-4'>
                                    <span class="material-symbols-outlined">
                                        add
                                    </span>
                                    <span className="font-semibold">
                                        Add Task</span>
                                </div>
                                {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-60 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-[#F8F8FF] font-bold py-4">Wednesday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-4/5 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-8 px-4">
                                <div className='flex justify-start items-center space-x-4'>
                                    <span class="material-symbols-outlined">
                                        add
                                    </span>
                                    <span className="font-semibold">
                                        Add Task</span>
                                </div>
                                {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-60 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-[#F8F8FF] font-bold py-4">Thursday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-4/5 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-8 px-4">
                                <div className='flex justify-start items-center space-x-4'>
                                    <span class="material-symbols-outlined">
                                        add
                                    </span>
                                    <span className="font-semibold">
                                        Add Task</span>
                                </div>
                                {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-60 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-[#F8F8FF] font-bold py-4">Friday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-4/5 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-8 px-4">
                                <div className='flex justify-start items-center space-x-4'>
                                    <span class="material-symbols-outlined">
                                        add
                                    </span>
                                    <span className="font-semibold">
                                        Add Task</span>
                                </div>
                                {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-60 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-[#F8F8FF] font-bold py-4">Saturday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-4/5 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-8 px-4">
                                <div className='flex justify-start items-center space-x-4'>
                                    <span class="material-symbols-outlined">
                                        add
                                    </span>
                                    <span className="font-semibold">
                                        Add Task</span>
                                </div>
                                {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-60 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-[#F8F8FF] font-bold py-4">Sunday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-4/5 border-2 bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-4 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-8 px-4">
                                <div className='flex justify-start items-center space-x-4'>
                                    <span class="material-symbols-outlined">
                                        add
                                    </span>
                                    <span className="font-semibold">
                                        Add Task</span>
                                </div>
                                {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
