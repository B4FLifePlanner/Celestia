import React, { useState, useEffect } from 'react';

function CurrentTime() {
    let [currentTime, setCurrentTime] = useState(new Date())
        useEffect(()=>{
            setInterval(()=>{
                setCurrentTime(new Date())
            },1000)
        })
    return (
        <div>
            <p className='font-bold'>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
}

export default CurrentTime;