import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = props => {
    console.log(props)
    let chartData = [
       { month: 'Jan' ,amount: 0},
       { month: 'Feb' ,amount: 0},
       { month: 'Mar' ,amount: 0},
       { month: 'Apr' ,amount: 0},
       { month: 'May' ,amount: 0},
       { month: 'Jun' ,amount: 0},
       { month: 'Jul' ,amount: 0},
       { month: 'Aug' ,amount: 0},
       { month: 'Sep' ,amount: 0},
       { month: 'Oct' ,amount: 0},
       { month: 'Nov' ,amount: 0},
       { month: 'Dec' ,amount: 0}
    ]

    for(let i in props.filteredExpanses){
        const month = props.filteredExpanses[i].date.getMonth()
        chartData[month].amount +=props.filteredExpanses[i].amount
    }
    console.log(chartData)
    return (
        <div>
            <Chart key={chartData.month} chartData = {chartData} />
        </div>
    )
}

export default ExpenseChart;