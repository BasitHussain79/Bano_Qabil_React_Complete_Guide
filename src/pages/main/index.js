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
  const [filterByYearData, setFilterByYearData] = useState(expenseListArr);

  const addExpenseDataHandler = (data) => {
    console.log("add expense", data);
    setExpenseListArr([data, ...expenseListArr]);
  };

  const editExpenseDataHandler = (data) => {
    console.log("edit expense", data);
    const editValues = expenseListArr.map((d) => {
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
    setExpenseListArr(editValues);
    setEditExpenseValues(null);
  };

  const editHandlerById = (id) => {
    const filteredArr = expenseListArr.filter((d) => +d.id === +id);
    setEditExpenseValues(filteredArr[0]);
  };

  const deleteByIdHandler = (id) => {
    console.log(id, "delete");
    const filterData = expenseListArr.filter((data) => data.id !== id);
    setExpenseListArr(filterData);
  };

  const filterByYearHandler = (year) => {
    const filterByYear = expenseListArr.filter(
      (data) => data.date.getFullYear().toString() === year.toString()
    );
    setFilterByYearData(filterByYear);
  };

  return (
    <Main>
      <ExpenseForm
        addExpense={addExpenseDataHandler}
        editExpense={editExpenseDataHandler}
        editValues={editExpenseValues}
      />
      <ExpenseFilter filterByYear={filterByYearHandler} />
      <ExpenseList
        expenses={filterByYearData}
        editById={editHandlerById}
        deleteById={deleteByIdHandler}
      />
    </Main>
  );
};

export default Home;
