import React, { useEffect, useState } from 'react';
import Send from '../../imgs/send.svg';
import attachment from '../../imgs/Vector.svg';
import record from '../../imgs/mic.svg';
import background from '../../imgs/cover-pic.svg';
import io from 'socket.io-client';
import Message from './Messages'
import axios from 'axios';

function Chat() {
  const CurrentUser = sessionStorage.getItem("Id")
  const [socket] = useState(() => io('http://localhost:5000', { path: '/socket.io' }));
  const [Msg, setMsg] = useState([])
  const [carrier, setCarrier] = useState('');
  useEffect(() => {
    if (!CurrentUser) {
      console.error("CurrentUser not found!");
      return;
    }
  
    socket.emit('joinTeam', CurrentUser);
  
      axios.get('http://localhost:5000/api/chat/messages', {
      params: { CurrentUser }
    })
      .then(response => {
        console.log(response.data);
        setMsg(response.data || []); 
      })
      .catch(error => {
        console.error("Error fetching messages:", error);
      });
  
    socket.on('chat message', (msg) => {
      setMsg((prevMsgs) => [...prevMsgs, msg]);
    });
  
    return () => {
      socket.off('chat message');
    };
  }, [CurrentUser, socket]);
  

  const handleChange = (e) => {
    setCarrier(e.target.value)
    console.log(carrier)
  }
  const handleSend =(e) => {
    e.preventDefault();
    if (!carrier.trim()) return;
    const newMsg = { Sender: CurrentUser, Content: carrier , Time: new Date().toLocaleTimeString()}
    socket.emit('chat message', newMsg);
    setCarrier('')
  };
  return (
    <div className="w-full h-screen mx-auto bg-[#E7EDF9] dark:bg-[#010B13] flex flex-col">

      {/* Background Image */}
      <div className="w-full h-32 ">
        <img src={background} alt="Background" className="w-full h-full object-cover" />
      </div>
      {Msg.length > 0 ? Msg.map((msg, index) => (
        <Message key={index} Sender={msg.Sender} Content={msg.Content} SenderName={msg.SenderName}/>
      )) : (
        <p>No messages to display</p>
      )}

      {/* Chat Input */}
      <div className="w-full p-2 md:p-4 bg-[#E7EDF9] dark:bg-[#010B13] flex items-center gap-8 mt-auto">
        <div className="flex flex-grow items-center bg-gray-100 dark:bg-[#EEEEEE] p-1 md:p-2 rounded-full shadow-md">
          <input
            onChange={handleChange}
            type="text"
            value={carrier}
            placeholder="Type a message..."
            className="flex-grow bg-transparent text-[10px] md:text-sm text-gray-800 focus:outline-none px-1 md:px-2"
          />
          <button className="text-gray-500 dark:text-gray-400 px-1 md:px-2">
            <img src={attachment} alt="Attach" />
          </button>
          <button className="text-gray-500 dark:text-gray-400 px-1 md:px-2">
            <img src={record} alt="Record" />
          </button>
        </div>
        <button className="ml-1 md:ml-2 text-blue-500" onClick={handleSend}>
          <img src={Send} alt="Send" />
        </button>
      </div>
    </div>
  );
}

export default Chat;