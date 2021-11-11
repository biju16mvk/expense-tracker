import Card from '../UI/Card';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';

const ExpenseItem = props => {
  return (
      props.expenses.map(expense => (
        <Card className="expense-item">
          <ExpenseDate date={expense.date}/>
          <div className="expense-item__description">
            <h2>{expense.title}</h2>
            <div className="expense-item__price">${expense.amount}</div>
          </div>
      </Card>
      ))
  );
}

export default ExpenseItem;
