import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const saveExpenseDataHandler = expenseData => {
    const data = {
      ...expenseData,
      date: new Date(expenseData.date),
      id: Math.random().toString()
    };
    props.onAddExpense(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
