import './ChartBar.css'
const ChartBar = props => {
    let barFillHeight = '0%'//set initial value to 0
    if (props.maxValue > 0) //increase the height based on the month values and set the values inside style prop
    {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
            </div>
            {/* style prop consist of double curly braces bcz we already know that to print the dynamic data we need curly braces and inside curly braces we are defining object which consisit of styling properties style is the default bulit in props*/}
            <div className='chart-bar__label'>{props.label} </div>
        </div>)
}
export default ChartBar