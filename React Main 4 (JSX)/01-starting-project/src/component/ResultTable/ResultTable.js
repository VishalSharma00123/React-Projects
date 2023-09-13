import resultStyle from './ResultsTable.module.css'
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
const Table = (props) => {
    return (<table className={resultStyle.result}>
        < thead >
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead >
        <tbody>
            {
                props.data.map((myyeardata) => {
                    return (<tr key={myyeardata.year}>
                        <td>{myyeardata.year}</td>
                        <td>{formatter.format(myyeardata.savingsEndOfYear)}</td>
                        <td>{formatter.format(myyeardata.yearlyInterest)}</td>
                        <td>{formatter.format(myyeardata.savingsEndOfYear - props.initialInvestment - myyeardata.yearlyContribution * myyeardata.year)}</td>
                        <td>{formatter.format(props.initialInvestment + myyeardata.yearlyContribution * myyeardata.year)}</td>
                    </tr>
                    )
                })
            }
        </tbody>
    </table >)
}
export default Table;