import Chart from '../Chart/Chart'
const ExpenseChart = props => {
    const ChartDataDoints = //storing the chart info of month and amount
        [
            { label: 'jan', value: 0, },
            { label: 'Feb', value: 0, },
            { label: 'Mar', value: 0, },
            { label: 'Apr', value: 0, },
            { label: 'May', value: 0, },
            { label: 'Jun', value: 0, },
            { label: 'Jul', value: 0, },
            { label: 'Aug', value: 0, },
            { label: 'Sep', value: 0, },
            { label: 'Oct', value: 0, },
            { label: 'Nov', value: 0, },
            { label: 'Dec', value: 0, },
        ];
    for (const expense of props.expenses)//go through all the object s oht the expeneses using prop and variable expense 
    {
        const expenseMonth = expense.date.getMonth();//get the month value
        ChartDataDoints[expenseMonth].value += expense.amount//add amount to the month
    }
    return (<Chart dataPoints={ChartDataDoints} />);//update the ChartDataDoints array
}
export default ExpenseChart