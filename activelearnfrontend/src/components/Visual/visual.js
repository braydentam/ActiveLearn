import React, {Component} from 'react';
import './visual.css';
import Chart from "react-apexcharts";


class Visual extends Component {
    constructor(props) {
      super(props);

      this.state = {
        correctAnswer: 4,
        values: [
          {
            name: "Bob",
            answer: "4"
          },
          {
            name: "Joe",
            answer: "4"
          },
          {
            name: "Bill",
            answer: "3"
          }
        ],
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
      const { values } = this.state;
      const { correctAnswer } = this.state;
      var chose1 = 0;
      var chose2 = 0;
      var chose3 = 0;
      var chose4 = 0;

      // values.map(value => (
      //   if(chose1 == value.answer){
      //     chose1++;
      // }
      //   ))
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
            {/* <h1 class="correct">Correct: </h1><p>Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,Bob, Bob,</p>
                <h1 class="incorrect">Incorrect: </h1><p>Bob, Bob</p> */}
            {values.map(value => (
              <p key={value.name}>{value.name} : {value.answer} </p>
            ))}

            </div>

        </div>

        </>
        );
    }
}

export default Visual;
