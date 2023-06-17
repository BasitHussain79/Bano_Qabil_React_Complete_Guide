import React, { useState } from "react";
import Main from "../../components/ui/main";
import ExpenseForm from "../../components/features/expenseForm";
import ExpenseFilter from "../../components/features/expenseFilter";
import ExpenseList from "../../components/features/expenseList";
import "./style.css";

const expenseList = [
  {
    id: 1,
    title: "Expense 01",
    price: 4.3,
    date: new Date("2023-11-22"),
  },
  {
    id: 2,
    title: "Expense 02",
    price: 44,
    date: new Date("2023-02-02"),
  },
  {
    id: 3,
    title: "Expense 03",
    price: 32,
    date: new Date("2020-01-12"),
  },
];
const Home = () => {
  const [expenseListArr, setExpenseListArr] = useState(expenseList);
  const [editExpenseValues, setEditExpenseValues] = useState(null);
  const getExpenseDataHandler = (data) => {
    console.log("hello", data);
    setExpenseListArr([data, ...expenseListArr]);
  };

  const editHandlerById = (id) => {
    const filteredArr = expenseListArr.filter((d) => +d.id === +id);
    setEditExpenseValues(filteredArr[0]);
  };

  return (
    <Main>
      <ExpenseForm
        getExpenseData={getExpenseDataHandler}
        editValues={editExpenseValues}
      />
      <ExpenseFilter />
      <ExpenseList expenses={expenseListArr} editById={editHandlerById} />
    </Main>
  );
};

export default Home;
