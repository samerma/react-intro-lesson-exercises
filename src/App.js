import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return 'some stuffs'
  }

  getMorningGreeting() {
    return <div>Good Morning</div>;
  }

  getEveningGreeting() {
    return <div>Good Evening</div>;
  }

  showCompany(name, revenue) {
    return <div id={name}>{name} makes {revenue} every year</div>
  }

  getClassName(temperature) {
    if (temperature < 15) return 'freezing'
    else if (temperature > 15 && temperature < 30) return 'fair'
    else return 'hell-scape'
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {
              new Date().getHours() > 12
                ? this.getEveningGreeting()
                : this.getMorningGreeting()
            }
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {
              [
                this.getMorningGreeting(),
                this.getEveningGreeting(),
                <p>some text</p>
              ]
            }
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {
              companies.map(c => this.showCompany(c.name, c.revenue))
            }
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {
              <div id='weatherBox' className={this.getClassName(5)}></div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
