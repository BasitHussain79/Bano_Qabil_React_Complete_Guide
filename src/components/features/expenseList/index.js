import React from "react";
import "./style.css";
import ExpenseItem from "../expenseItem";

const ExpenseList = ({ expenses, editById }) => {
  const getIdHandler = (id) => editById(id);
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
