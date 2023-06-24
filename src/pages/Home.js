import React, { useState } from "react";
import Container from "../components/ui/container";
import ExpenseForm from "../components/feature/expenseForm";
import ExpenseList from "../components/feature/expenseList";
const expenseListArr = [
  {
    id: 1,
    title: "Expense 01",
    price: 233,
    date: new Date("2023-11-22"),
  },
  {
    id: 2,
    title: "Expense 02",
    price: 23.4,
    date: new Date("2023-02-02"),
  },
  {
    id: 3,
    title: "Expense 03",
    price: 45,
    date: new Date("2020-01-12"),
  },
];
const Home = () => {
  const [expenseList, setExpenseList] = useState(expenseListArr);
  const [editValues, setEditValues] = useState(null);

  const addExpenseHandler = (data, method) => {
    if (method === "add") setExpenseList([data, ...expenseList]);
    if (method === "edit") {
    }
  };

  const getIdHandler = (id, method) => {
    if (method === "delete") {
      const deleteData = expenseList.filter((data) => +data.id !== +id);
      setExpenseList(deleteData);
    } else if (method === "edit") {
      const editData = expenseList.filter((data) => data.id === id);
      setEditValues(editData[0]);
    }
  };
  return (
    <Container>
      <ExpenseForm addExpense={addExpenseHandler} editValues={editValues} />
      <ExpenseList list={expenseList} getId={getIdHandler} />
    </Container>
  );
};

export default Home;
