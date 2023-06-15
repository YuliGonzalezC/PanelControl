import Chart from 'chart.js/auto';
import {Line} from "react-chartjs-2"



const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

function LineChat() {
  return <div className="bg-white " style={{ width: '100%', minHeight: '300px' }} >
        <Line data={data}></Line>
  </div>;
}

export default LineChat;