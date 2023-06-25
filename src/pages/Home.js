import React, { useState } from "react";
import Container from "../components/ui/container";
import ExpenseForm from "../components/feature/expenseForm";
import ExpenseList from "../components/feature/expenseList";
import ExpenseFilter from "../components/feature/expenseFilter";

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
  const [editData, setEditData] = useState(null);
  const [year, setYear] = useState("2023");

  const getDataHandler = (data, method) => {
    console.log(data, method);
    if (method === "add") {
      setExpenseList([data, ...expenseList]);
    } else if (method === "edit") {
      const editValues = expenseList.map((d) => {
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

      setExpenseList(editValues);
      setEditData(null);
    }
  };

  const getIdHandler = (data, method) => {
    if (method === "delete") {
      const filterData = expenseList.filter((d) => +d.id !== +data);
      setExpenseList(filterData);
    } else if (method === "edit") {
      const filterData = expenseList.filter((d) => +d.id === +data);
      setEditData(filterData[0]);
    }
  };

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  const filterExpenses = expenseList.filter(
    (data) => +data.date.getFullYear() === +year
  );
  return (
    <Container>
      <ExpenseForm getData={getDataHandler} editData={editData} />
      <ExpenseFilter
        getYear={yearChangeHandler}
        year={year}
        filterExpenses={filterExpenses}
      />
      <ExpenseList list={filterExpenses} getId={getIdHandler} />
    </Container>
  );
};

export default Home;
