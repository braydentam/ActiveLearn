import React, {Component} from 'react';
import './visual.css';
import Chart from "react-apexcharts";
import {globalObject} from "../../App"



class Visual extends Component {
    constructor(props) {
      super(props);

      this.state = {
        users: [],
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
        correctAnswer: 4,
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
            data: []
            // CHANGE COUNT1, COUNT2, COUNT3, COUNT4 ABOVE
          }
        ]
      }
    }

    componentDidMount = () => {
      console.log("MOUNTED Visual")
      setTimeout(() => { 
          console.log("adding listener")
          console.log(globalObject)
          globalObject.socket.addEventListener("message", (event) =>{
          let json = JSON.parse(event.data)
          console.log(json)
          if (json.info === "answer") {
            console.log("answer came in")
            let values = JSON.parse(json.value);
            console.log(values); 
            let selected = 1;
            Object.keys(values).forEach((key) => {
              if (key.substring("option")) {
                selected = key.replace("option ", "")
              }
            });
            let new_data = {}
            new_data[json.name] = selected.toString()
            let users = this.state.users;
            users.push(new_data)
            this.setState({
              users: users
            })
            this.counter()
          }
        })
        console.log("added lisntener")
      }, 500)
    }
  

    counter = () => {
      let userlist = this.state.users;
      let counter1 = 0;
      let counter2 = 0;
      let counter3 = 0;
      let counter4 = 0;
      
      console.log(`user list: ${userlist}`);

      userlist.map( user => {
        console.log(user);
        let key = Object.keys(user);

        if (user[key] === "1"){
          counter1+=1;
          this.setState({
            count1: counter1
          });
        }

        else if (user[key] === "2"){
          counter2+=1;
          this.setState({
            count2: counter2
          });
        }

        else if (user[key] === "3"){
          counter3+=1;
          this.setState({
            count3: counter3
          });
        }

        else if (user[key] === "4"){
          counter4+=1;
          this.setState({
            count4: counter4
          });
        }

        // console.log(this.state.series);
      });
      let arr = [this.state.count1, this.state.count2, this.state.count3, this.state.count4];
      console.log(arr);

      let newSeries = [];
      newSeries.push({data: arr, name: "Chart"});

      this.setState({
        series: newSeries
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
            
            {this.state.users.map(user => {
              let key = Object.keys(user);
              return <p className = "select">{key} Selected Option {user[key]} </p>
            })}

            </div>

        </div>

        </>
        );
    }
}

export default Visual;
