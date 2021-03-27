import React, {Component} from 'react';
import './visual.css';
import Chart from "react-apexcharts";



class Visual extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
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
            data: [4, 3, 2, 1]
            // CHANGE COUNT1, COUNT2, COUNT3, COUNT4 ABOVE
          }
        ]
      };
    }
    count = () => {
      const { values } = this.state;
      const { correctAnswer } = this.state;
      values.map(value => {
        if (value.answer.equals("1")){
          let count = this.state.count1;
          this.setState({
            count: count+1
          })
        }
        else if (value.answer.equals("2")){
          let count = this.state.count2;
          this.setState({
            count: count+1
          })
        }
        else if (value.answer.equals("3")){
          let count = this.state.count3;
          this.setState({
            count: count+1
          })
        }
        else if (value.answer.equals("4")){
          let count = this.state.count4;
          this.setState({
            count: count+1
          })
          console.log("selected 4");
        }

    })
    }
    
    
  
    render() {
      const { values } = this.state;
      const { correctAnswer } = this.state;
      
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
            
            {values.map(value => (
              <p className = "select" key={value.name}>{value.name} Selected Option {value.answer} </p>
            ))}

            </div>

        </div>

        </>
        );
    }
}

export default Visual;
