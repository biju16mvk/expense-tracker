import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
  const dataValues = props.data.map(item => item.value);
  const maxValue = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.data.map(data => (
        <ChartBar
          value={data.value}
          maxValue={maxValue}
          label={data.label}
          key={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
