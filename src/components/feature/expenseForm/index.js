import React, { useState } from "react";
import "./style.css";

const ExpenseForm = ({ getData }) => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    price: "",
    date: "",
  });

  const inputChangeHandler = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      ...expenseData,
      id: Math.floor(Math.random() * 1000),
      date: new Date(expenseData.date),
    };
    getData(data, "add");
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
            name='title'
            value={expenseData.title}
            onChange={inputChangeHandler}
            required
          />
        </div>

        <div>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            id='price'
            name='price'
            value={expenseData.price}
            onChange={inputChangeHandler}
            required
          />
        </div>

        <div>
          <label htmlFor='expenseDate'>Date</label>
          <input
            type='date'
            name='expenseDate'
            id='expenseDate'
            name='date'
            value={expenseData.date}
            onChange={inputChangeHandler}
            required
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
