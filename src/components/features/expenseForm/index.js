import React, { useEffect, useState } from "react";
import "./style.css";

const ExpenseForm = ({ addExpense, editExpense, editValues }) => {
  // const [expenseTitle, setExpenseTitle] = useState("");
  // const [expenseDate, setExpenseDate] = useState("");
  // const [expensePrice, setExpensePrice] = useState("");

  const [expenseData, setExpenseData] = useState({
    title: "",
    price: "",
    date: "",
  });

  useEffect(() => {
    if (editValues !== null) {
      const date = editValues.date.toLocaleDateString().split("/");
      const formatDate = `${date[2]}-${
        date[0].length !== 2 ? "0" + date[0] : date[0]
      }-${date[1].length !== 2 ? "0" + date[1] : date[1]}`;
      setExpenseData({
        title: editValues.title,
        price: editValues.price,
        date: formatDate,
      });
    }

    // return () => {
    //   console.log("empty data effect");
    // };
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
      id:
        editValues !== null ? editValues.id : Math.floor(Math.random() * 1000),
      title: expenseData.title,
      date: new Date(expenseData.date),
      price: expenseData.price,
    };

    editValues !== null ? editExpense(data) : addExpense(data);

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
            required
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
          {editValues !== null ? "Edit" : "Add"} Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
