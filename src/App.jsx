import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMenu from "./components/DisplayMenu";
import Board from "./components/Board";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); 
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortingOption, setSortingOption] = useState("priority");


  useEffect(() => {
  
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => setTickets(response.data.tickets)) 
      .catch((error) => console.error("Error fetching tickets:", error));


    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => setUsers(response.data.users)) 
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="app">
      <DisplayMenu
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      />
      <Board
        tickets={tickets} 
        users={users} 
        groupingOption={groupingOption}
        sortingOption={sortingOption}
      />
    </div>
  );
};

export default App;
