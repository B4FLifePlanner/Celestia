import { useState } from "react";
import ToDoStatus from "./ToDoStatus";
import Button from './Button';
function Add_To_Do() {


    return (
        <div className='w-full h-[100%] flex flex-col p-4 md:p-10 lg:p-20 gap-y-4 font-nunito font-bold bg-[#E7EDF9] dark:bg-[#010B13] text-[#010B13]'>
            <h1 className="bg-transparent font-extrabold text-2xl dark:text-[#F8F8FF] md:text-4xl border-none focus:outline-none resize-none h-16 md:h-20 lg:h-24 mb-2" wrap="hard">
                Task:
            </h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="Name" className="md:w-1/6 dark:text-[#F8F8FF]">Name of Task</label>
                <input type="text" id="Name" name="Name" className="border-none bg-transparent focus:outline-none w-full md:w-auto text-gray-800 dark:text-[#F8F8FF]" defaultValue="Michael A. Kowal" />
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="Description" className="md:w-1/6 dark:text-[#F8F8FF]">Description</label>
                <input type="text" id="Description" name="Description" className="border-none bg-transparent focus:outline-none w-full md:w-auto text-gray-800 dark:text-[#F8F8FF]" defaultValue="100/ 200" />
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="status" className="md:w-1/6 dark:text-[#F8F8FF]">Status</label>
                <div id="status">
                    <ToDoStatus />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="Deadline" className="md:w-1/6 dark:text-[#F8F8FF]">Deadline</label>
                <input type="text" id="Deadline" name="Deadline" className="border-none bg-transparent focus:outline-none w-full md:w-auto text-gray-800 dark:text-[#F8F8FF]" defaultValue="100/ 200" />
            </div>




            <div className="flex gap-x-2 mt-4 md:mt-6 self-center md:self-end">
                <Button textColor="#E7EDF9" bgColor="#FF0606"  hoverColor="#010B13" hoverText="#fff" text="Delete" />
                <Button textColor="#E7EDF9" bgColor="#7C9ED9" hoverColor="#010B13" hoverText="#fff" text="Done" />
            </div>
        </div>
    );
}

export default Add_To_Do



