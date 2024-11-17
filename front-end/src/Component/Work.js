import React from "react";
import { Link } from "react-router-dom";
import AssistantIcon from '@mui/icons-material/Assistant';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import TaskIcon from '@mui/icons-material/Task';
function Work() {
    return(
        <div className="Work">
            <p className="mb-5">Work Use : </p>
            <Link to="/Home/Work/CelestiaAI">
            <div className="flex items-center mb-5">
                <AssistantIcon/>
                <span className="ml-5">Celestia AI</span>
            </div>
            </Link>
            <Link to="/Home/Work/Chats">
                <div className="flex items-center mb-5">
                    <ChatBubbleOutlineIcon/>
                    <span className="ml-5">Chats</span>
                </div>
            </Link>
            <Link to="/Home/Work/Teams">
                <div className="flex items-center mb-5">
                    <GroupsIcon/>
                    <span className="ml-5">Teams</span>
                </div>
            </Link>
            <Link to="/Home/Work/Tasks">
                <div className="flex items-center mb-5">
                    <TaskIcon/>
                    <span className="ml-5">Tasks</span>
                </div>
            </Link>
        </div>
    )
}
export default Work