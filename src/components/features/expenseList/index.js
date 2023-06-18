import React from "react";
import "./style.css";
import ExpenseItem from "../expenseItem";

const noRecordFoundStyle = {
  textAlign: "center",
};

const ExpenseList = ({ expenses, editById, deleteById }) => {
  const editByIdHandler = (id) => editById(id);
  const deleteByIdHandler = (id) => deleteById(id);
  return (
    <ul className='expense-list'>
      {expenses.length > 0 ? (
        expenses.map((expenseItem) => (
          <ExpenseItem
            key={expenseItem.id}
            id={expenseItem.id}
            title={expenseItem.title}
            price={expenseItem.price}
            date={expenseItem.date}
            editById={editByIdHandler}
            deleteById={deleteByIdHandler}
          />
        ))
      ) : (
        <h3 style={noRecordFoundStyle}>No Record Found!</h3>
      )}
    </ul>
  );
};

export default ExpenseList;
