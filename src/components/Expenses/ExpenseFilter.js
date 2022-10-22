import React from 'react';

import './ExpenseFilter.css';
const ExpenseFilter = (props) => {
  let FILTER_OTION_COUNT = 5;
  let cuurentYear = new Date().getFullYear();
  const filterChangeHandler= (e)=>{
    props.onFilterChange(e.target.value)
  }
  let options= [];
  while (FILTER_OTION_COUNT--) {
    options.push(<option value={cuurentYear}>{cuurentYear}</option>)
    cuurentYear--;
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterChangeHandler}>
          {options}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;