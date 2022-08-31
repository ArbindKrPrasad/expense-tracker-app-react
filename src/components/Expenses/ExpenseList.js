import ExpenseItem from "./ExpenseItem";
const ExpenseList = props => {

    if(props.filteredExpanses.length === 0){
        return (<div className="expenses__no-expenses">No Expenses Found</div>)
    }

    return props.filteredExpanses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ));
    
}

export default ExpenseList;