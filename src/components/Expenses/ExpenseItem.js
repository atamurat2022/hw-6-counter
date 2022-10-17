import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [newtitle, setTitle] = useState(0);
  console.log();

  function changeTitle() {
    setTitle("welcome to Peaksift");
  }
  function remoteTitle() {
    setTitle("Welcome");
  }
  function increment(params) {
    setTitle((prev) => prev + 1);
  }
  function decrement(params) {
    if (newtitle > 0) {
      setTitle((prev) => prev - 1);
    }
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        {/* <h2>{props.expenseTitle}</h2> */}
        <h1>{newtitle}</h1>

        <div className="expense-item__price">${props.expensePrice}</div>
        {/* <button onClick={props.changeHandler}>Change title</button>
         */}
        <button onClick={changeTitle}>Button</button>
        <button onClick={remoteTitle}>Button R</button>
      </div>

      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
      {/* <p>{count}</p> */}
    </Card>
  );
}

export default ExpenseItem;
