import React, { useEffect, useState } from "react";
import "./style.css";

const ExpenseForm = ({ addExpense, editValues }) => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    price: "",
    date: "",
  });

  useEffect(() => {
    if (editValues !== null) {
      const year = editValues.date.getFullYear();
      const month = ("0" + editValues.date.getMonth() + 1).slice("-2");
      const day = editValues.date.toLocaleString("en-US", { day: "2-digit" });
      console.log(month);
      setExpenseData({
        title: editValues.title,
        price: editValues.price,
        date: `${year}-${month}-${day}`,
      });
    }
  }, [editValues]);

  const inputChangeHandler = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      ...expenseData,
      id:
        editValues !== null ? editValues.id : Math.floor(Math.random() * 1000),
      date: new Date(expenseData.date),
    };
    if (editValues !== null) {
      addExpense(data, "edit");
    } else {
      addExpense(data, "add");
    }

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
          {editValues !== null ? "Edit" : "Add"} Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
