import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

export default function ExpenseList(props) {
    return (
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                ></ExpenseItem>
            ))}
        </Card>
    );
}
