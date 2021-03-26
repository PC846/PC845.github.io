import React from 'react';
import {Line} from 'react-chartjs-2';
import './css/LineChart.css';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May', 'July', 'August', 'September', 'November', 'December'],
  datasets: [
    {
      label: 'Balance',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 70, 33, 24,67, 50, 90, 45]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div className="linechart">
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Balance over 1 year',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}