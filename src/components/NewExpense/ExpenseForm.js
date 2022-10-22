import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const today = new Date();
    const defaultValue = {
        title: "",
        amount: "",
        date: ""
    }
    const [userInput, setUserInput] = useState(defaultValue);

    const titleChangeHandler = (event)=>{
        setUserInput((prevInput) => {
            return { 
                ...prevInput,
                title : event.target.value
            }
        })
    }
    const dateChangeHandler = (event)=>{
        setUserInput((prevInput) => {
            return { 
                ...prevInput,
                date : event.target.value
            }
        });
    }
    const amountChangeHandler = (event)=>{
        setUserInput((prevInput) => {
            return { 
                ...prevInput,
                amount : event.target.value
            }
        });
    }

    const addExpenseHandler = (event) => {
        event.preventDefault();
        userInput.date = new Date(userInput.date);
        userInput.amount = parseInt(userInput.amount)
        props.onSaveExpenseData(userInput);
        setUserInput(defaultValue)
    }

    return (
        <form onSubmit={addExpenseHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangeHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max={today.toJSON().split('T')[0]} value={userInput.date} onChange={dateChangeHandler} required/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
