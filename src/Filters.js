import React from "react";
import './Filters';
function Filters({ onSortChange }) {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };
  //filters
 
  return (
    <div className="filters">
      <label>Sort By: </label> 
      <div >
<select name="select" onChange={handleSortChange}>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="a-to-z" >Name: A to Z</option>
          <option value="z-to-a" >Name: Z to A</option>
          </select>
        </div>
        </div>   
  );
}
export default Filters;