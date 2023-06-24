import React from "react";
import ExpenseItem from "./expnsesItem";
import "./style.css";

const ExpenseList = ({ list, getId }) => {
  const getIdHandler = (id, method) => getId(id, method);
  return (
    <ul className='expense-list'>
      {list.map((data) => (
        <ExpenseItem
          key={data.id}
          id={data.id}
          title={data.title}
          price={data.price}
          date={data.date}
          getId={getIdHandler}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
