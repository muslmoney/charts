import ReactApexChart from "react-apexcharts";
import { Fragment } from "react";
export const PieCharts = () => {
  const series = [110 ,220, 320 ,425, 234];

  const options = {
   charts: {
      width: 420,
      type: 'pie'
   },
   labels: ["P" , 'o', 'r' , 'n', 'o'],
   // fill: {
   //    colors: [ '#fff', '#000']
   // },
   // legend: {
   //    show: false
   // }
  };
  return (
    <Fragment>
      <ReactApexChart
        series={series}
        options={options}
        height={420}
        type="pie"
      ></ReactApexChart>
    </Fragment>
  );
};
