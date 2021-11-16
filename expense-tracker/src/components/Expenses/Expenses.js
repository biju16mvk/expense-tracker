import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const selectFilterHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectFilter={selectFilterHandler}/>
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
};

export default Expenses;
