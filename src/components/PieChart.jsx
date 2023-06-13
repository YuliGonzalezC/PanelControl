import Chart from 'chart.js/auto';
import {Pie} from "react-chartjs-2"


const labels=["January, February, Macrh, April, May, June"];

const data ={
    labels: labels,
    datasets: [
    { label: "My First dataset",
      backgroundCo1or: "rgb(255, 99, 132)",
      borderColor:"rgb(25, 99, 132)",
      data: [0, 10, 5, 2, 20, 30,45],
    },
    ],
    };

function PieChart() {
  return <div className="bg-white border border-secondary">
        <Pie data={data}></Pie>
  </div>;
}

export default PieChart;
