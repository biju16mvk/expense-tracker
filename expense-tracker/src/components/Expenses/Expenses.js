import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = props => {
  return (
    <Card className="expenses">
      <ExpenseItem expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;