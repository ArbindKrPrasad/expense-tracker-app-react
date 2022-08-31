import react from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  console.log("chartBar>>>", props);
  let barFillHeight = '0%';
  if(props.maxValue>0){
      barFillHeight= Math.round((props.barData.amount/props.maxValue)*100)
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}/>
      </div>
      <div className="chart-bar__label">{props.barData.month}</div>
    </div>
  );
};

export default ChartBar;
