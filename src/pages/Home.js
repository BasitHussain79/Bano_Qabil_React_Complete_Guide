import React, { useState } from "react";
import Container from "../components/ui/container";
import ExpenseForm from "../components/feature/expenseForm";
import ExpenseList from "../components/feature/expenseList";
import ExpenseFilter from "../components/feature/expenseFilter";
import NoRecord from "../components/feature/noRecord";
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
  const [year, setYear] = useState("2023");

  const addExpenseHandler = (data, method) => {
    if (method === "add") setExpenseList([data, ...expenseList]);
    if (method === "edit") {
      const editExpense = expenseList.map((d) => {
        if (d.id === data.id) {
          return {
            id: data.id,
            title: data.title,
            price: data.price,
            date: data.date,
          };
        }
        return d;
      });
      setExpenseList(editExpense);
      setEditValues(null);
    }
  };

  const yearChangeHandler = (data) => {
    setYear(data);
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

  const filterExpenses = expenseList.filter(
    (data) => data.date.getFullYear() === +year
  );

  return (
    <Container>
      <ExpenseForm addExpense={addExpenseHandler} editValues={editValues} />
      <ExpenseFilter
        year={year}
        getYear={yearChangeHandler}
        filterExpenses={filterExpenses}
      />
      {filterExpenses.length > 0 ? (
        <ExpenseList list={filterExpenses} getId={getIdHandler} />
      ) : (
        <NoRecord />
      )}
    </Container>
  );
};

export default Home;
