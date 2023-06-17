import React from "react";
import "./style.css";
import ExpenseItem from "../expenseItem";

const ExpenseList = ({ expenses, getDataById }) => {
  const getIdHandler = (id) => getDataById(id);
  return (
    <ul className='expense-list'>
      {expenses.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          id={expenseItem.id}
          title={expenseItem.title}
          price={expenseItem.price}
          date={expenseItem.date}
          getId={getIdHandler}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
