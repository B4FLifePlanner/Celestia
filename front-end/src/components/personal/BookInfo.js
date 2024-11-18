import { useState } from "react";
import BookStatus from "./ToDoStatus";
import Button from './Button';
function BookInfo() {
    const [rating, setRating] = useState({ s1: false, s2: false, s3: false, s4: false, s5: false });
    const addStar = (starIndex) => {
        setRating((prevRating) => {
            const isCurrentlyFilled = prevRating[`s${starIndex}`];
            const updatedRating = {};
            for (let i = 1; i <= 5; i++) {
                updatedRating[`s${i}`] = i <= starIndex ? !isCurrentlyFilled : false;
            }
            return updatedRating;
        });
    };

    return (
        <div className='w-full h-full flex flex-col p-4 md:p-10 lg:p-20 gap-y-4 font-nunito font-bold bg-[#E7EDF9] text-[#010B13]'>
            <textarea className="bg-transparent font-extrabold text-2xl md:text-4xl border-none focus:outline-none resize-none h-16 md:h-20 lg:h-24 mb-2" wrap="hard">
                Above the Shelter: Silent Remains
            </textarea>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="author" className="md:w-1/6">Author</label>
                <input type="text" id="author" name="author" className="border-none bg-transparent focus:outline-none w-full md:w-auto text-gray-800" defaultValue="Michael A. Kowal" />
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="pages" className="md:w-1/6">Pages</label>
                <input type="text" id="pages" name="pages" className="border-none bg-transparent focus:outline-none w-full md:w-auto text-gray-800" defaultValue="100/ 200" />
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="status" className="md:w-1/6">Status</label>
                <div id="status">
                    <BookStatus />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 items-start">
                <label htmlFor="rating" className="md:w-1/6">Rating</label>
                <div id="rating" className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <Star
                            key={index}
                            onClick={() => addStar(index)}
                            sx={{
                                color: "#7C9ED9",
                                fill: rating[`s${index}`] ? "#F2F293" : "#7C9ED9",
                                cursor: 'pointer',
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
                <label htmlFor="notes">Notes</label>
                <textarea
                    type="text"
                    id="notes"
                    name="notes"
                    className="border-[#908888] rounded-lg border-solid resize-none border-[2px] w-full bg-[#F8F8FF] focus:outline-none text-[#010B13]"
                />
            </div>
            <div className="flex gap-x-2 mt-4 md:mt-6 self-center md:self-end">
                <Button textColor="#E7EDF9" bgColor="#FF0606" hoverColor="#010B13" hoverText="#fff" text="Delete" />
                <Button textColor="#E7EDF9" bgColor="#7C9ED9" hoverColor="#010B13" hoverText="#fff" text="Done" />
            </div>
        </div>
    );
}

export default BookInfo



