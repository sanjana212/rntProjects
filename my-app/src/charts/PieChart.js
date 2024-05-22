import React from 'react'
import Chart from 'react-apexcharts';
 const PieChart = () => {
  return (
    <div>
        <h3>Welcome to piechart</h3>
        <Chart
        type="pie"
        width={1300}
        height={500}
        series={[23,43,50,54,65]}
        options={{
            labels:["hindi","English","Math","Science","social science"]
        }}
        />
    </div>
  )
}
export default PieChart;
