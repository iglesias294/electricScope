import React, { Component } from 'react';
import logo from './logo.svg';
import townhouse from './townhouse.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      basement: '',
      service: false,
      basement1: false,
      basementLight: false,
      basementBathFan: false,
      basementCeilingFan: false,
      basementDedicated: false,
      basementSmoke: false,
      basementCo: false,
      basementOther: false,
      basementRec: '',
      rewire2: 'entire floor',
      firstFloor: '',
      firstFloorRewire: false,
      firstFloorRewiring: 'entire floor',
      firstFloorRL: false,
      firstFloorRLCount: false,
      firstFloorSurfaceLight: false,
      firstFloorSurfaceLightCount: 0,
      firstFloorBathFan: false,
      firstFloorBathFanCount: false,
      firstFloorCeilingFan: false,
      firstFloorCeilingFanCount: false,
      firstFloorDedicated: false,
      firstFloorSmoke: false,
      firstFloorSmokeCount: 0,
      firstFloorCO: false,
      firstFloorOther: false,
      firstFloorOtherText: false,
      firstFloorRec: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;

    let value = target.type === 'checkbox' && target.checked ? target.value : '';
    let name = target.name;
    if (target.type === 'checkbox' && !target.checked) {
      this.setState({
        [name]: false
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Electrical Scope of Work Generator</h1>
        </header>
        <div className="OuterContainer">
          <img style={{ display: 'inline-block' }} src={townhouse} alt="townhouse" />
          <form style={{ display: 'inline-block' }}>
            <div className="FormContainer">
              <div id="basementSection">
                <p class="title">
                  <input
                    name="basement"
                    type="checkbox"
                    value="Basement"
                    onChange={this.handleInputChange}
                  /><label>Basement</label></p>

                <p>
                  <input
                    name="service"
                    type="checkbox"
                    value="Replace service entrance cable"
                    onChange={this.handleInputChange}
                  /><label>Service</label>
                </p>

                <p>
                  <input
                    name="meter"
                    type="checkbox"
                    value="Supply and install 200 amp meter"
                    onChange={this.handleInputChange}
                  /><label>Meter</label>
                </p>
                <p>
                  <input
                    name="panel"
                    type="checkbox"
                    value="Supply and install 200 amp panel"
                    onChange={this.handleInputChange}
                  /><label>Panel</label>
                </p>

                <p>
                  <input
                    name="rewire"
                    type="checkbox"
                    value={this.state.basement1}
                    onChange={this.handleInputChange}
                  /><label>Rewire</label>
                  <input
                    name="rewire2"
                    type="text"
                    placeholder="entire floor"
                    value={this.state.rewire2}
                    onChange={(event) => this.setState({ rewire2: event.target.value })}
                  />
                </p>

                <p>
                  <input
                    name="basement1"
                    type="checkbox"
                    value={this.state.basement1}
                    onChange={this.handleInputChange}
                  /><label>Recessed lights?</label>
                  <input
                    name="basementRec"
                    type="number"
                    value={this.state.basementRec}
                    onChange={(event) => this.setState({ basementRec: event.target.value })}
                  />
                </p>

                <p>
                  <input
                    name="basementLight"
                    type="checkbox"
                    value={this.state.basementLight}
                    onChange={this.handleInputChange}
                  /><label>Surface Mount Lighting?</label>
                  <input
                    name="basementLight2"
                    type="number"
                    value={this.state.basementLight2}
                    onChange={(event) => this.setState({ basementLight2: event.target.value })}
                  />
                </p>

                <p>
                  <input
                    name="basementBathFan"
                    type="checkbox"
                    value={this.state.basementBathFan}
                    onChange={this.handleInputChange}
                  /><label>Bath Fans?</label>
                  <input
                    name="basementBathFan2"
                    type="number"
                    value={this.state.basementBathFan2}
                    onChange={(event) => this.setState({ basementBathFan2: event.target.value })}
                  />
                </p>

                <p>
                  <input
                    name="basementCeilingFan"
                    type="checkbox"
                    value={this.state.basementCeilingFan}
                    onChange={this.handleInputChange}
                  /><label>Ceiling Fans?</label>
                  <input
                    name="basementCeilingFan2"
                    type="number"
                    value={this.state.basementCeilingFan2}
                    onChange={(event) => this.setState({ basementCeilingFan2: event.target.value })}
                  />
                </p>

                <p>
                  <input
                    name="basementDedicated"
                    type="checkbox"
                    value={this.state.basementDedicated}
                    onChange={this.handleInputChange}
                  />
                  <label>Dedicated Circuits?</label>

                </p>

                <p>
                  <input
                    name="basementSmoke"
                    type="checkbox"
                    value={this.state.basementSmoke}
                    onChange={this.handleInputChange}
                  /><label>Smoke Detectors</label>
                  <input
                    name="basementSmoke2"
                    type="number"
                    value={this.state.basementSmoke2}
                    onChange={(event) => this.setState({ basementSmoke2: event.target.value })}
                  />
                </p>

                <p>
                  <input
                    name="basementCo"
                    type="checkbox"
                    value={this.state.basementCo}
                    onChange={this.handleInputChange}
                  /><label>CO Detectors</label>
                  <input
                    name="basementSmoke2"
                    type="number"
                    value={this.state.basementCo2}
                    onChange={(event) => this.setState({ basementCo2: event.target.value })}
                  />
                </p>

                <p>
                  <input
                    name="basementOther"
                    type="checkbox"
                    value={this.state.basementOther}
                    onChange={this.handleInputChange}
                  />
                  <input
                    name="basementOther2"
                    type="text"
                    value={this.state.basementOther2}
                    onChange={(event) => this.setState({ basementOther2: event.target.value })}
                  />
                </p>
              </div> {/* // basement section */}
              <div id="firstFloor">
                <p class="title">
                  <input
                    name="firstFloor"
                    type="checkbox"
                    value="First Floor"
                    onChange={this.handleInputChange}
                  />
                  <label>First Floor</label>
                </p>
                <p>
                  <input
                    name="firstFloorRewire"
                    type="checkbox"
                    value={this.state.firstFloorRewire}
                    onChange={this.handleInputChange}
                  /><label>Rewire</label>
                  <input
                    name="firstFloorRewiring"
                    type="text"
                    placeholder="entire floor"
                    value={this.state.firstFloorRewiring}
                    onChange={(event) => this.setState({ firstFloorRewiring: event.target.value })}
                  />
                </p>
                <p>
                  <input
                    name="firstFloorRL"
                    type="checkbox"
                    value={this.state.firstFloorRL}
                    onChange={this.handleInputChange}
                  /><label>Recessed lights?</label>
                  <input
                    name="firstFloorRLCount"
                    type="number"
                    value={this.state.firstFloorRLCount}
                    onChange={(event) => this.setState({ firstFloorRLCount: event.target.value })}
                  />
                </p>
                <p>
                  <input
                    name="firstFloorSurfaceLight"
                    type="checkbox"
                    value={this.state.firstFloorSurfaceLight}
                    onChange={this.handleInputChange}
                  /><label>Surface Mount Lighting?</label>
                  <input
                    name="firstFloorSurfaceLightAmount"
                    type="number"
                    value={this.state.firstFloorSurfaceLightCount}
                    onChange={(event) => this.setState({ firstFloorSurfaceLightCount: event.target.value })}
                  />
                </p>
                <p>
                  <input
                    name="firstFloorBathFan"
                    type="checkbox"
                    value={this.state.firstFloorBathFan}
                    onChange={this.handleInputChange}
                  /><label>Bath Fans?</label>
                  <input
                    name="firstFloorBathFanCount"
                    type="number"
                    value={this.state.firstFloorBathFanCount}
                    onChange={(event) => this.setState({ firstFloorBathFanCount: event.target.value })}
                  />
                </p>
                <p>
                  <input
                    name="firstFloorCeilingFan"
                    type="checkbox"
                    value={this.state.firstFloorCeilingFan}
                    onChange={this.handleInputChange}
                  /><label>Ceiling Fans?</label>
                  <input
                    name="firstFloorCeilingFanCount"
                    type="number"
                    value={this.state.firstFloorCeilingFanCount}
                    onChange={(event) => this.setState({ firstFloorCeilingFanCount: event.target.value })}
                  />
                </p>
                <p>
                  <input
                    name="firstFloorDedicated"
                    type="checkbox"
                    value={this.state.firstFloorDedicated}
                    onChange={this.handleInputChange}
                  />
                  <label>Dedicated Circuits?</label>

                </p>
                <p>
                  <input
                    name="firstFloorSmoke"
                    type="checkbox"
                    value={this.state.firstFloorSmoke}
                    onChange={this.handleInputChange}
                  /><label>Smoke Detectors</label>
                  <input
                    name="firstFloorSmokeCount"
                    type="number"
                    value={this.state.firstFloorSmokeCount}
                    onChange={(event) => this.setState({ firstFloorSmokeCount: event.target.value })}
                  />
                </p>
                <p>
                  <input
                    name="firstFloorCO"
                    type="checkbox"
                    value={this.state.firstFloorCO}
                    onChange={this.handleInputChange}
                  /><label>CO Detectors?</label>
                  <input
                    name="firstFloorCOCount"
                    type="number"
                    value={this.state.firstFloorCOCount}
                    onChange={(event) => this.setState({ firstFloorCOCount: event.target.value })}
                  />
                </p>
                <p>
                  <input
                    name="firstFloorOther"
                    type="checkbox"
                    value={this.state.firstFloorOther}
                    onChange={this.handleInputChange}
                  />
                  <input
                    name="firstFloorOtherText"
                    type="text"
                    value={this.state.firstFloorOtherText}
                    onChange={(event) => this.setState({ firstFloorOtherText: event.target.value })}
                  />
                </p>
              </div>
              <div id="secondFloor"></div>
              <div id="thirdFloor"></div>

            </div>
          </form>
        </div>

        <div className="output">
          <hr />
          <p className="title">Scope of Work</p>
          {/*Begin Basement*/}
          <p className="title is-4">{this.state.basement}</p>
          <ul>
            {this.state.service ? <li>{this.state.service}</li> : ''}
            {this.state.meter ? <li>{this.state.meter}</li> : ''}
            {this.state.panel ? <li>{this.state.panel}</li> : ''}
            {this.state.rewire ? <li>Rewire {this.state.rewire2}: standard white switches and plugs. </li> : ''}
            {this.state.basement1 ? <li>Supply and install {this.state.basementRec} recessed light{this.state.basementRec > 1 ? 's' : ''}</li> : ''}
            {this.state.basementLight ? <li>Supply and install {this.state.basementLight2} surface mount light{this.state.basementLight2 > 1 ? 's' : ''}</li> : ''}
            {this.state.basementBathFan ? <li>Install power for {this.state.basementBathFan2} bathroom exhaust fan{this.state.basementBathFan2 > 1 ? 's' : ''}</li> : ''}
            {this.state.basementCeilingFan ? <li>Install power for {this.state.basementCeilingFan2} ceiling fan{this.state.basementCeilingFan2 > 1 ? 's' : ''}</li> : ''}
            {this.state.basementDedicated ? <li>Run dedicated circuits for washer, dryer, furnace, and AC </li> : ''}
            {this.state.basementSmoke ? <li>Supply and install {this.state.basementSmoke2} smoke detector{this.state.basementSmoke2 > 1 ? 's' : ''}</li> : ''}
            {this.state.basementCo ? <li>Supply and install {this.state.basementCo2} CO detector{this.state.basementCo2 > 1 ? 's' : ''}</li> : ''}
            {this.state.basementOther ? <li>{this.state.basementOther2}</li> : ''}
          </ul>
          {/*End Basement*/}

          {/*Begin First Floor*/}
          <p className="title is-4">{this.state.firstFloor}</p>
          <ul>
            {this.state.firstFloorRewire ? <li>Rewire {this.state.firstFloorRewiring}: standard white switches and plugs. </li> : ''}
            {this.state.firstFloorRL ? <li>Supply and install {this.state.firstFloorRLCount} recessed light{this.state.firstFloorRLCount > 1 ? 's' : ''}</li> : ''}
            {this.state.firstFloorSurfaceLight ? <li>Supply and install {this.state.firstFloorSurfaceLightCount} surface mount light{this.state.firstFloorSurfaceLightCount > 1 ? 's' : ''}</li> : ''}
            {this.state.firstFloorBathFan ? <li>Install power for {this.state.firstFloorBathFanCount} bathroom exhaust fan{this.state.firstFloorBathFanCount > 1 ? 's' : ''}</li> : ''}
            {this.state.firstFloorCeilingFan ? <li>Install power for {this.state.firstFloorCeilingFanCount} ceiling fan{this.state.firstFloorCeilingFanCount > 1 ? 's' : ''}</li> : ''}
            {this.state.firstFloorDedicated ? <li>Run dedicated circuits for microwave, range, refrigerator, dishwasher, disposal, GFCI, under-cabinet lights </li> : ''}
            {this.state.firstFloorSmoke ? <li>Supply and install {this.state.firstFloorSmokeCount} smoke detector{this.state.firstFloorSmokeCount > 1 ? 's' : ''}</li> : ''}
            {this.state.firstFloorCO ? <li>Supply and install {this.state.firstFloorCOCount} CO detector{this.state.firstFloorCOCount > 1 ? 's' : ''}</li> : ''}
            {this.state.firstFloorOther ? <li>{this.state.firstFloorOtherText}</li> : ''}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
