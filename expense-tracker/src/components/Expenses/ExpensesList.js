import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
  return (
    <div>
      {!props.expenses.length ? (
        <h2 className="expenses-list__fallback">No expenses found</h2>
      ) : (
        props.expenses.map(item => <ExpenseItem key={item.id} expense={item} />)
      )}
    </div>
  );
};

export default ExpensesList;
