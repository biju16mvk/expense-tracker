import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const saveExpenseDataHandler = expenseData => {
    const data = {
      ...expenseData,
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
