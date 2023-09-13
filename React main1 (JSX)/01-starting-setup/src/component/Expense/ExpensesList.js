import './ExpensesList.css'
import Expenseitem from './Expenseitem';
const ExpensesList = (props) => //fucntion to check if the selected year contain the expense item or not ,if the item length is 0 then i have no item for the selected  year and it display NO expenses found if the selected year conataints the element then it simply return the contains 
{
    if (props.myitems.length === 0) {
        return <h2 className='expenses-list__fallback'>NO expenses found</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.myitems.map((expense) => (
                <Expenseitem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            ))}
        </ul>
    )
}
export default ExpensesList