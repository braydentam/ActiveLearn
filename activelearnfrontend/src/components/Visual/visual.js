import React, {Component} from 'react';
import './visual.css';
import Chart from "react-apexcharts";


class Visual extends Component {
    constructor(props) {
      super(props);
      this.vals = [
          {
            "Bill":4,
            "Bob":4,
            "Joe":3
          },
        ];
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["Option 1","Option 2","Option 3","Option 4"]
          },
          fill: {
            colors: ['#000000']
          }
        },
        series: [
          {
            name: "Number of Answers",
            data: [30, 40, 45, 50]
          }
        ]
      };
    }
  
    render() {
     
    return (
        <>
      
        <div class = "visual">
            <div className="app">
                <div className="row">
                <div className="mixed-chart">
                    <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="500"
                    />
                </div>
                </div>
            </div>
            <div className="table">
            <h1 class="correct">Correct: </h1><p>Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,</p>
                <h1 class="incorrect">Incorrect: </h1><p>Bob, Bob</p>

            </div>

        </div>

        </>
        );
    }
}

export default Visual;
