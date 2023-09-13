import './Chart.css'
import ChartBar from './ChartBar'
const Chart = props => {
    const dataPointValues = props.dataPoints.map(data => data.value);//array pf numbers
    const totalMaximum = Math.max(...dataPointValues);//finding the maximum number in the element we used spread opearator to pull out all the array element and use them as stand alone arguments
    return (
        <div className='chart'>
            {props.dataPoints.map((data) =>
            (<ChartBar
                Key={data.id}
                value={data.value}
                maxValue={totalMaximum}
                label={data.label} />))}
        </div>//array of jsx element
    )
}
export default Chart