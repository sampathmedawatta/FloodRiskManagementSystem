import React from "react";
// import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
const FloodForecastLineGraph = ({chartData}) => {

  return (
    <div>
      {" "}
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-12">
                  <h6 className="text-left">
                    <i className="bi bi-water fs-5" />
                    {" "} Flood Forecast for Next {chartData?.forecastPeriod} Days
                  </h6>
                </div>
              </div>
            </div>
            <div className="panel-body">
              {((chartData?.forecastData !== null) && chartData !== null) && (
                <Line
                  data={{
                    labels: chartData.forecastData?.map((item) => item.date),
                    datasets: [
                      {
                        label: "flood level",
                        data: chartData.forecastData?.map((item) => item.flood),
                        backgroundColor: "#05264e",
                        borderColor: "#05264e",
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      title: {
                        display: false,
                      },
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloodForecastLineGraph;
