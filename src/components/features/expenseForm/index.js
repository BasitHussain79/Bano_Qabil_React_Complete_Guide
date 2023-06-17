import React, { useEffect, useState } from "react";
import "./style.css";

const ExpenseForm = ({ getExpenseData, editValues }) => {
  // const [expenseTitle, setExpenseTitle] = useState("");
  // const [expenseDate, setExpenseDate] = useState("");
  // const [expensePrice, setExpensePrice] = useState("");

  const [expenseData, setExpenseData] = useState({
    title: "",
    price: "",
    date: "",
  });

  useEffect(() => {
    console.log("useEffect run");
    if (editValues != null) {
      setExpenseData({
        title: editValues.title,
        price: editValues.price,
        date: editValues.date,
      });
    }
  }, [editValues]);

  const inputChangeHandler = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  // const titleChangeHandler = (e) => {
  //   setExpenseTitle(e.target.value);
  // };

  // const dateChangeHandler = (e) => {
  //   setExpenseDate(e.target.value);
  // };

  // const priceChangeHandler = (e) => {
  //   setExpensePrice(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 1000),
      title: expenseData.title,
      date: new Date(expenseData.date),
      price: expenseData.price,
    };

    getExpenseData(data);

    setExpenseData({
      title: "",
      price: "",
      date: "",
    });
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
          />
        </div>

        <div>
          <label htmlFor='expensePrice'>Price</label>
          <input
            type='number'
            placeholder='99'
            name='price'
            value={expenseData.price}
            onChange={inputChangeHandler}
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
