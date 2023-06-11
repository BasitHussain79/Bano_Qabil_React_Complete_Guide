import React from "react";
import "./style.css";
import ExpenseItem from "../expenseItem";

const ExpenseList = () => {
  const expenseListArr = [
    {
      id: 1,
      title: "Expense 01",
      date: new Date("2023-11-22"),
    },
    {
      id: 2,
      title: "Expense 02",
      date: new Date("2023-02-02"),
    },
    {
      id: 3,
      title: "Expense 03",
      date: new Date("2020-01-12"),
    },
  ];
  return (
    <ul className='expense-list'>
      {expenseListArr.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          id={expenseItem.id}
          title={expenseItem.title}
          date={expenseItem.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
