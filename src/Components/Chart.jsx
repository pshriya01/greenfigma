import React from 'react'
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
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

  return (
    <div>
      {/* <select value={selectedValue} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        
      </select> */}

      <Bar  data={{
          labels: selectedValue.map(item => item.Date),
          datasets: [
            {
              label: 'Emissions',
              data: selectedValue.map(item => item.Emissions),
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
            {
              label: 'Revenue',
              data: selectedValue.map(item => item.Revenue),
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
            },
            
          ],
        }}  />
    </div>
  )
}

export default BarChart

