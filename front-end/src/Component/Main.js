import React from "react";
import CurrentTime from "./CurrentTime";
import Weather from "./Weather";

function Main() {
    return (
        <div className="mt-7">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-6 sm:space-y-0 sm:space-x-8">
                <CurrentTime />
                <Weather />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center sm:text-left">
                Hello, <span className="text-textBlue">User-Name</span>
            </h1>
            <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#908888] mb-6 text-center sm:text-left">
                Ready to organize your life?
            </p>
            <div>
                <p className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 text-center sm:text-left">Upcoming Events :</p>
            </div>
        </div>
    );
}

export default Main;