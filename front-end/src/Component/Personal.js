import React from "react";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import { Link } from "react-router-dom";

function Personal() {
    return (
        <div className="Personal">
            <p className="mb-5">Personal Use:</p>
            <Link to="/Home/Personal/ReadBook">
                <div className="flex items-center mb-5">
                    <ImportContactsIcon />
                    <span className="ml-5">Bookworm Zone</span>
                </div>
            </Link>
            <Link to="/Home/Personal/ToDoList">
                <div className="flex items-center mb-5">
                    <FormatListBulletedIcon />
                    <span className="ml-5">To-do-list</span>
                </div>
            </Link>
            <Link to="/Home/Personal/Travel">
                <div className="flex items-center mb-5">
                    <LocalAirportIcon />
                    <span className="ml-5">Travel Planner</span>
                </div>
            </Link>
        </div>
    );
}

export default Personal;