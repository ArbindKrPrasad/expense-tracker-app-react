import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    console.log(props)
    const maxValue = Math.max(...props.chartData.map(data => data.amount))
    console.log(maxValue)

    return (
        <div className="chart">
            {props.chartData.map(data => <ChartBar barData= {data} maxValue={maxValue}/>)}
        </div>
    )
}

export default Chart;