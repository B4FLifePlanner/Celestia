import React from 'react'
import cover from '../../imgs/bg-cover-to-do.svg'
import ToDo from '../../imgs/To-Do-List Icon.svg'

const Main = () => {
    return (
        <div className='bg-[#E7EDF9] dark:bg-[#010B13]'>
            {/* Cover image */}
            <div className="relative h-32 md:h-48 overflow-hidden hidden sm:block">
                <img src={cover} alt="Background Image" className="object-cover w-full h-full" />
            </div>

            <div className='flex flex-col p-60 gap-10'>
                <h1 className="font-bold text-3xl flex justify-start gap-3">
                    <img src={ToDo} />
                    To-Do-List
                </h1> {/* Added font-bold */}
                <p className='text-[24px]'>Organizing your life hasn’t been easier:</p>

                {/* Main To-Do Section */}
                <div className='flex flex-wrap justify-start gap-10'>
                    {/* Monday */}
                    <div className='flex flex-col justify-between gap-5 rounded-lg w-72 py-5 h-auto'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-white font-bold py-2">Monday</h2> {/* Added font-bold */}
                        <div className='flex flex-col'>
                            <ul className='space-y-5'>
                                <li className="flex items-center space-x-2">
                                    <input type="checkbox" checked className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />
                                    <label className="text-sm text-[#475569] dark:text-[#cbd5e1] font-semibold line-through">Call Mark</label> {/* Added font-semibold */}
                                </li>
                                <li className="flex items-center space-x-2">
                                    <input type="checkbox" className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />
                                    <label className="text-sm text-[#475569] dark:text-[#cbd5e1] font-semibold">Go Shopping</label> {/* Added font-semibold */}
                                </li>
                                <li className="flex items-center space-x-2">
                                    <input type="checkbox" className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />
                                    <label className="text-sm text-[#475569] dark:text-[#cbd5e1] font-semibold">Cook Lunch</label> {/* Added font-semibold */}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="w-3/5 border-2 dark:bg-[#061E30] bg-[#F8F8FF] dark:bg-[#061E30] border-[#94a3b8] dark:border-[#64748b] py-1 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-3 px-8">

                                <span className="font-semibold">Add Task</span> {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    {/* Repeat for other days of the week */}
                    <div className='card flex flex-col gap-10 rounded-lg w-72 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-white font-bold py-2">Tuesday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-3/5 border-2 dark:bg-[#061E30] bg-[#F8F8FF] border-[#94a3b8] dark:border-[#64748b] py-1 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-3 px-8">
                                <span className="font-semibold">Add Task</span> {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-72 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-white font-bold py-2">Wednesday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-3/5 border-2 dark:bg-[#061E30] bg-[#F8F8FF] border-[#94a3b8] dark:border-[#64748b] py-1 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-3 px-8">
                                <span className="font-semibold">Add Task</span> {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-72 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-white font-bold py-2">Thursday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-3/5 border-2 dark:bg-[#061E30] bg-[#F8F8FF] border-[#94a3b8] dark:border-[#64748b] py-1 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-3 px-8">
                                <span className="font-semibold">Add Task</span> {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-72 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-white font-bold py-2">Friday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-3/5 border-2 dark:bg-[#061E30] bg-[#F8F8FF] border-[#94a3b8] dark:border-[#64748b] py-1 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-3 px-8">
                                <span className="font-semibold">Add Task</span> {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-72 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-white font-bold py-2">Saturday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-3/5 border-2 dark:bg-[#061E30] bg-[#F8F8FF] border-[#94a3b8] dark:border-[#64748b] py-1 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-3 px-8">
                                <span className="font-semibold">Add Task</span> {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>

                    <div className='card flex flex-col gap-10 rounded-lg w-72 py-5'>
                        <h2 className="text-center bg-[#7C9ED9] rounded-[10px] text-white font-bold py-2">Sunday</h2> {/* Added font-bold */}
                        <div>
                            <button className="w-3/5 border-2 dark:bg-[#061E30] bg-[#F8F8FF] border-[#94a3b8] dark:border-[#64748b] py-1 rounded-lg text-[#475569] dark:text-[#cbd5e1] flex items-center justify-start space-x-3 px-8">
                                <span className="font-semibold">Add Task</span> {/* Added font-semibold */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
