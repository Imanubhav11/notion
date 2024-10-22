
import React, { useState } from "react"; 
import DisplayIcon from "../images/Display.svg";
import DownIcon from '../images/down.svg'


const DisplayMenu = ({
  groupingOption,
  setGroupingOption,
  sortingOption,
  setSortingOption,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); 
  };

  return (
    <div>
      <div className="dropdown">
        
        <button onClick={toggleDropdown} className="dropdown-button">
            <img src={DisplayIcon} alt="photo" />
            Display
            <img src={DownIcon} alt="photo" />
        </button>
        {isDropdownOpen && (
          <div className="display-menu">
            <div>
              <label htmlFor="grouping">Grouping:</label>
              <select
                id="grouping"
                value={groupingOption}
                onChange={(e) => setGroupingOption(e.target.value)}
                style={{ marginLeft: '10px' }}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div>
              <label htmlFor="sorting">Ordering:</label>
              <select
                id="sorting"
                value={sortingOption}
                onChange={(e) => setSortingOption(e.target.value)}
                style={{ marginLeft: '10px' }} 
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayMenu;
