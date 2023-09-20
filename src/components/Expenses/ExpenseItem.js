import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) =>
{
const clickHandler = () => {
    console.log('clicked');
};

   return (
         
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
        <button onClick={clickHandler}>start</button>


    </Card>
    );
}
export default ExpenseItem;