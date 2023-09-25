import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) =>
{
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
    setTitle('updated');
    console.log('clicked');
};

   return (
         
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails amount={props.amount}  location={props.location}   title={title} />
        <button onClick={clickHandler}>start</button>
    </Card>
    );
}
export default ExpenseItem;