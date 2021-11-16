import React, { useState } from "react";

import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.expense.title);

  const changeTitleHandler = () => {
    setTitle("Updated Title !!!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
