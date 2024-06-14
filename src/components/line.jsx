import { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';

export const LineCharts = () => {
  const series = [
    {
      name: 'Line item',
      data: [10, 100, 10, 100, 50, 100, 35, 40, 25],
    },
  ];
  const options = {
    chart: {
      type: 'line',
      height: 420,
      zoom: {
         enabled: false
      },
      toolbar: {
         show: false
      }
    },
    title: {
      text: "Hellodsdsdsdsd ",
      align: 'left',
    },
    xaxis: {
      categories: ['l', 'l', 'l', 'y', 'y', 'y', 'pon', 'pon', 'pon'],
    },
  };

  return (
    <Fragment>
      <ReactApexChart
        series={series}
        options={options}
        height={420}
        type="line"
      ></ReactApexChart>
    </Fragment>
  );
};
