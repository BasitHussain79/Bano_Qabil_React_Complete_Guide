import React, { useState } from "react";
import "./style.css";

const ExpenseForm = () => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const titleChangeHandler = (e) => {
    setExpenseTitle(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setExpenseDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: expenseTitle,
      date: expenseDate,
    };
    console.log("data", data);
  };

  return (
    <div className='expense-form'>
      <h4>Add Expense</h4>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='expenseTitle'>Expense</label>
          <input
            type='text'
            name='expenseTitle'
            id='expenseTitle'
            placeholder='Add expense'
            value={expenseTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div>
          <label htmlFor='expenseDate'>Date</label>
          <input
            type='date'
            name='expenseDate'
            id='expenseDate'
            value={expenseDate}
            onChange={dateChangeHandler}
          />
        </div>

        <button className='btn' type='submit'>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
