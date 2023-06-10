import React from "react";
import "./style.css";

const ExpenseItem = () => {
  return (
    <li className='expense-item'>
      <div className='date'>
        <p className='month'>Dec</p>
        <p className='year'>2022</p>
        <p className='day'>04</p>
      </div>
      <h3 className='title'>Expense Title</h3>
      <div className='actions'>
        <button className='btn edit-btn'>Edit</button>
        <button className='btn delete-btn'>Delete</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
