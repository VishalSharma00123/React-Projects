import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: "2-digit" })//get the month
    const year = props.date.getFullYear();//getFullYear() js built in method
    const day = props.date.toLocaleString('en-US', { day: "2-digit" })//get the days
    // and print all the day months year 
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day ">{day}</div>
        </div>
    )
}
export default ExpenseDate;