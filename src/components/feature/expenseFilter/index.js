import React from "react";
import classes from "./style.module.css";
import { Dropdown } from "./style";

const ExpenseFilter = ({ getYear, year, filterExpenses }) => {
  const yearChangeHandler = (e) => {
    getYear(e.target.value);
  };

  return (
    <div className={classes["filter-data"]}>
      <h3>Filter</h3>
      <Dropdown
        bg={filterExpenses.length === 0 && "red"}
        onChange={yearChangeHandler}
        value={year}
      >
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </Dropdown>
    </div>
  );
};

export default ExpenseFilter;
