import React from "react";
import Main from "../../components/ui/main";
import ExpenseForm from "../../components/features/expenseForm";
import ExpenseFilter from "../../components/features/expenseFilter";
import ExpenseList from "../../components/features/expenseList";
import "./style.css";

const Home = () => {
  return (
    <Main>
      <ExpenseForm />
      <ExpenseFilter />
      <ExpenseList />
    </Main>
  );
};

export default Home;
