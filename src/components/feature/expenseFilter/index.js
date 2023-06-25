import React from "react";
import classes from "./style.module.css";
import { DropDown } from "./style";

const ExpenseFilter = ({ year, getYear, filterExpenses }) => {
  const yearGetHandler = (e) => {
    console.log(e.target.value);
    getYear(e.target.value);
  };
  return (
    <div className={classes["filter-data"]}>
      <h3>Filter</h3>
      <DropDown
        noData={filterExpenses.length === 0 && "red"}
        // color='#eee'
        onChange={yearGetHandler}
        value={year}
      >
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </DropDown>
    </div>
  );
};

export default ExpenseFilter;
