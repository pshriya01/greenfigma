import React from 'react'
import { useState, useEffect } from 'react';
import { Bar,Line } from 'react-chartjs-2';
// import {BarElement} from 'react-chartjs-2'
import chartData from './ChartData'; 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from 'chart.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  )

const BarChart = () => {
    const {option1}=chartData
    // console.log(option1)
    const [selectedValue, setSelectedValue] = useState(option1);
  const [chartDataState, setChartData] = useState(chartData[selectedValue]);
  useEffect(() => {
    // Update chart data when selectedValue changes
    setChartData(chartData[selectedValue]);
  }, [selectedValue]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        labels: selectedValue.map(item => item.Month),
      },
    y1: {
        type: 'linear',
        beginAtZero: true,
        position: 'left',
        min:0,
        max:1000,
        stepSize:100
      },
      y2: {
        type: 'linear',
        beginAtZero: true,
        position: 'right',
        min:0,
        max:25,
        stepSize:5
      },

    },
  };

  return (
    <div>
      {/* <select value={selectedValue} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        
      </select> */}

      <Bar  data={{
        
          datasets: [
            {
              label: 'Emissions-2023',
              data: selectedValue.map(item => item.Emissions),
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
              type:"bar",
              yAxisID: 'y1',
            },
            {
            label: 'Revenue',
            data: selectedValue.map(item => item.ER),
            type: 'line',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2,
            fill: false,
            yAxisID: 'y2',
            },
            
          ],
          
        }} 
        options={chartOptions}
         />
        
    </div>
  )
}

export default BarChart

