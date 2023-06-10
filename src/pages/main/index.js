import React from "react";
import Main from "../../components/ui/main";
import ExpenseFilter from "../../components/features/expenseFilter";
import ExpenseList from "../../components/features/expenseList";
import "./style.css";

const Home = () => {
  return (
    <Main>
      <ExpenseFilter />
      <ExpenseList />
    </Main>
  );
};

export default Home;
