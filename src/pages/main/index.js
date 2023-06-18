import React, { useState } from "react";
import Main from "../../components/ui/main";
import ExpenseForm from "../../components/features/expenseForm";
import ExpenseFilter from "../../components/features/expenseFilter";
import ExpenseList from "../../components/features/expenseList";
import "./style.css";

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
  const [editExpenseValues, setEditExpenseValues] = useState(null);
  const [filterExpenses, setFilterExpenses] = useState(expenseList);

  const addExpenseData = (data) => {
    console.log("add", data);
    setExpenseList([data, ...expenseList]);
    setFilterExpenses([data, ...expenseList]);
  };

  const editExpenseData = (data) => {
    console.log(data, "edit");
    const updatedListData = expenseList.map((d) => {
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
    setExpenseList(updatedListData);
    setFilterExpenses(updatedListData);
    setEditExpenseValues(null);
  };

  const editDataByIdHandler = (id) => {
    const filterById = expenseList.filter((data) => +data.id === +id);
    setEditExpenseValues(filterById[0]);
  };

  const deleteDataByIdHandler = (id) => {
    const filterData = expenseList.filter((data) => +data.id !== +id);
    setExpenseList(filterData);
    setFilterExpenses(filterData);
  };

  const filterByYearHadnler = (year) => {
    console.log(year);
    const filterByYear = expenseList.filter(
      (d) => d.date.getFullYear().toString() === year.toString()
    );
    setFilterExpenses(filterByYear);
  };

  return (
    <Main>
      <ExpenseForm
        expenseData={addExpenseData}
        editExpenseData={editExpenseData}
        editValuesData={editExpenseValues}
      />
      <ExpenseFilter filterByYear={filterByYearHadnler} />
      <ExpenseList
        expenses={filterExpenses}
        editDataById={editDataByIdHandler}
        deleteDataById={deleteDataByIdHandler}
      />
    </Main>
  );
};

export default Home;
