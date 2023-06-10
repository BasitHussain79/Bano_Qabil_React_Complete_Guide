import React from "react";
import "./style.css";
import ExpenseItem from "../expenseItem";

const ExpenseList = () => {
  return (
    <ul className='expense-list'>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </ul>
  );
};

export default ExpenseList;
