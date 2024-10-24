import React, { useState, useEffect } from "react";
import TicketCard from "./TicketCard";
import todo from '../images/To-do.svg';
import inProgress from '../images/in-progress.svg';
import backlog from '../images/Backlog.svg';
import urgentImage from "../images/SVG-UrgentPrioritycolour.svg";
import highImage from "../images/Img-HighPriority.svg";
import mediumImage from "../images/Img-MediumPriority.svg";
import lowImage from "../images/Img-LowPriority.svg";
import noPriorityImage from "../images/No-priority.svg";
import threedotmenu from "../images/3dotmenu.svg"
import add from "../images/add.svg";
import profilePic from "../images/profile.svg";


const priorityMapping = {
  4: { label: "Urgent", image: urgentImage },
  3: { label: "High", image: highImage },
  2: { label: "Medium", image: mediumImage },
  1: { label: "Low", image: lowImage },
  0: { label: "No Priority", image: noPriorityImage },
};


const groupBy = (tickets, groupingOption, users) => {
  const grouped = {};
  
  tickets.forEach((ticket) => {
    let key;
    

    if (groupingOption === "user") {
      const user = users.find(u => u.id === ticket.userId);
      key = user ? user.name : "No User";
    } else if (groupingOption === "priority") {

      key = priorityMapping[ticket.priority]?.label || "No Priority";
    } else {
      key = ticket[groupingOption] || "No Group"; 
    }

    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(ticket);
  });
  
  return grouped;
};


const sortTickets = (tickets, sortingOption) => {
  return tickets.sort((a, b) => {
    if (sortingOption === "priority") {
      return b.priority - a.priority; 
    }
    if (sortingOption === "title") {
      return a.title.localeCompare(b.title); 
    }
    return 0;
  });
};

const Board = ({ tickets, users, groupingOption, sortingOption }) => {
  const [groupedTickets, setGroupedTickets] = useState({});

  
  useEffect(() => {
    if (Array.isArray(tickets) && Array.isArray(users)) {
      const grouped = groupBy(tickets, groupingOption, users); 
      setGroupedTickets(grouped);
    } else {
      console.error("Error: Tickets or Users data is not an array.");
    }
  }, [tickets, users, groupingOption]);

  
  const getImageSrc = (group) => {
    
    const priorityEntry = Object.values(priorityMapping).find(p => p.label === group);
    if (priorityEntry) {
      return priorityEntry.image; 
    }


    switch (group.toLowerCase()) {
      case "todo":
        return todo;
      case "in progress":
        return inProgress;
      case "backlog":
        return backlog;
      default:
        return profilePic;
    }
  };

  return (
    <div className="parent-board">
      <div className="board">
        {Object.keys(groupedTickets).map((group) => (
          <div key={group} className="group-column">
            <div className="parent" >
              <img src={getImageSrc(group)} alt={`${group}`} />
              <p>{group}</p>
              <p>{groupedTickets[group].length}</p> 

              <div className="hero">
                <img src={threedotmenu} alt="photo1" />
                <img src={add} alt="photo2" />
              </div>
            </div>
            {sortTickets(groupedTickets[group], sortingOption).map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
