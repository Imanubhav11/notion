// components/TicketCard.js
import React from "react";
import todo from '../images/To-do.svg';
import threedotmenu from "../images/3dotmenu.svg";
import inProgress from '../images/in-progress.svg';
import backlog from '../images/Backlog.svg';
import done from "../images/Done.svg";
import profilePic from "../images/profile.svg"; // Import profilePic

const TicketCard = ({ ticket }) => {

    const getImageSrc = (ticket) => {
        // Fallback to status-based images
        switch (ticket.status.toLowerCase()) {
            case "todo":
                return todo; // Change this back to todo for the 'todo' status
            case "in progress":
                return inProgress;
            case "backlog":
                return backlog;
            case "done":
                return done; // Add a case for 'done'
            default:
                return profilePic; // Default image
        }
    };

    return (
        <div className="ticket-card">
            <span>{ticket.id}</span>
            <div className="wi">
                <img src={getImageSrc(ticket)} alt={ticket.status} /> {/* Pass the whole ticket */}
                <p>{ticket.title}</p>
            </div>
            <p>{ticket.description}</p>
            
            <div className="hi">
                <img src={threedotmenu} alt="menu" />
                <div className="feature-tag">
                    <img src={todo} alt="tag" />
                    <p>{ticket.tag}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
