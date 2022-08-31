import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount(""); //To clear the input
    setEnteredDate("");
    setEnteredTitle("");
  };
  const setIsFormOpenHandler = (event) => {
    console.log("form handler");
    setIsFormOpen(!isFormOpen);
  };

  if (isFormOpen === false) {
    return <button onClick={setIsFormOpenHandler}>Add Expense</button>;
  }

  //Value in input field is used for two way binding, So that we can clean the value later when form is submitted
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.0}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense__actions">
        <button onClick={setIsFormOpenHandler}>Cancel</button>
        <button type="submit" onClick={setIsFormOpenHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
