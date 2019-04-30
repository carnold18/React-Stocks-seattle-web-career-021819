import React from 'react';

// We need both an onChange and a checked (must evaluate to true or false)
// for all radio button inputs in order to update how the "checked button" renders.

// If I wanted to change this to a class component, I could update the selectedOption state
// here within this component instead of using the onClick callback to update the MainComponent
// state. The way it is currently written, I'm updating the selectedOption state when sorting
// the stocks by price or alpha. 

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.selectedOption === "Alphabetically"} onChange={event => props.updateRadioButton(event.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.selectedOption === "Price"} onChange={event => props.updateRadioButton(event.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={event => props.filterStocks(event.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
