import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMenu from "./components/DisplayMenu";
import Board from "./components/Board";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); // New state for users
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortingOption, setSortingOption] = useState("priority");

  // Fetch tickets and users data
  useEffect(() => {
    // Fetch tickets
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => setTickets(response.data.tickets)) // Access the `tickets` from API response
      .catch((error) => console.error("Error fetching tickets:", error));

    // Fetch users
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => setUsers(response.data.users)) // Access the `users` from API response
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
        tickets={tickets} // Passing the correct tickets array
        users={users} // Passing the fetched users
        groupingOption={groupingOption}
        sortingOption={sortingOption}
      />
    </div>
  );
};

export default App;
