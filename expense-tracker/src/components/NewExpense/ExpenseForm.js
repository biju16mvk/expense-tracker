import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: ""
  });

  const changeTitleHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.onAddExpenseData(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: ""
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Submit </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
