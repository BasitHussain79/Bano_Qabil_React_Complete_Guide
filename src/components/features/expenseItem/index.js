import React from "react";
import "./style.css";

const ExpenseItem = (props) => {
  const date = props.date.toLocaleDateString().split("/");
  const month = date[0];
  const day = date[1];
  const year = date[2];

  const editHandler = () => {
    props.getId(props.id);
  };

  return (
    <li className='expense-item'>
      <div className='date'>
        <p className='month'>{month.length !== 1 ? month : `0${month}`}</p>
        <p className='year'>{year}</p>
        <p className='day'>{day.length === 1 ? `0${day}` : day}</p>
      </div>
      <h3 className='title'>
        {props.title} &nbsp; - &nbsp; ${props.price}
      </h3>
      <div className='actions'>
        <button className='btn edit-btn' onClick={editHandler}>
          Edit
        </button>
        <button className='btn delete-btn'>Delete</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
