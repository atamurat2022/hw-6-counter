import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  function changeHandler(event) {
    console.log(event);
  }
  return (
    <Card className="expenses">
      <ExpenseItem
        expenseTitle={props.expenses[0].title}
        expensePrice={props.expenses[0].amount}
        expenseDate={props.expenses[0].date}
        changeHandler={changeHandler}
      />
      <ExpenseItem
        expenseTitle={props.expenses[1].title}
        expensePrice={props.expenses[1].amount}
        expenseDate={props.expenses[1].date}
        changeHandler={changeHandler}
      />
      <ExpenseItem
        expenseTitle={props.expenses[2].title}
        expensePrice={props.expenses[2].amount}
        expenseDate={props.expenses[2].date}
        changeHandler={changeHandler}
      />
    </Card>
  );
}

export default Expenses;
