import React, { useEffect, useState } from "react";
import "./style.css";

const ExpenseFilter = ({ filterByYear }) => {
  const [year, setYear] = useState("2023");
  const selectYearHandler = (e) => {
    setYear(e.target.value);
  };

  useEffect(() => {
    filterByYear(year);
  }, [year]);

  return (
    <div className='filter'>
      <h4 className='label'>Filter Expense</h4>
      <div className='filter-options'>
        <select onChange={selectYearHandler}>
          <option className='option' value='2023'>
            2023
          </option>
          <option className='option' value='2022'>
            2022
          </option>
          <option className='option' value='2021'>
            2021
          </option>
          <option className='option' value='2020'>
            2020
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
