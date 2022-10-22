import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";


export default function ExpenseList(props) {
    let today = new Date();
    const [filterValue, setFilterValue] = useState(today.getFullYear());
    const filterChangeHandler = (newValue) => {
        setFilterValue(newValue);
    };
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === parseInt(filterValue);
    });
    return (
        <Card className="expenses">
            <ExpenseFilter onFilterChange={filterChangeHandler} />
            <ExpenseChart expenses={filteredExpenses}/>
            {filteredExpenses.length === 0 ? (
                <h2 className="expenses-list__fallback">No Expenses Found!</h2>
            ) : (
                <ul className="expenses-list">
                    {filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            date={expense.date}
                            amount={expense.amount}
                        ></ExpenseItem>
                    ))}
                </ul>
            )}
        </Card>
    );
}
