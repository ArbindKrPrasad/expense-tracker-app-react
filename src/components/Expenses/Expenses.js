import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onYearChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpanses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  console.log(filteredExpanses)
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={onYearChangeHandler}
      />
      <ExpenseChart filteredExpanses = {filteredExpanses}/>
      <ExpenseList filteredExpanses = {filteredExpanses}/>
    </Card>
  );
};

export default Expense;
