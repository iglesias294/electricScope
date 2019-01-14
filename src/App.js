import React, { Component } from 'react';
import logo from './logo.svg';
import townhouse from './townhouse.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeForm: 'basement',
      basement: '',
      service: false,
      meter: false,
      panel: false,
      basement1: false,
      basementLight: false,
      basementBathFan: false,
      basementCeilingFan: false,
      basementDedicated: false,
      basementSmoke: false,
      basementCo: false,
      basementOther: false,
      basementRec: '',
      rewire: false,
      rewire2: 'entire floor',
      firstFloor: '',
      firstFloorRewire: false,
      firstFloorRewiring: 'entire floor',
      firstFloorRL: false,
      firstFloorRLCount: false,
      firstFloorPendantLight: false,
      firstFloorPendantLightCount: false,
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
      firstFloorRec: '',
      secondFloor: '',
      secondFloorRewire: false,
      secondFloorRewiring: 'entire floor',
      secondFloorRL: false,
      secondFloorRLCount: false,
      secondFloorSurfaceLight: false,
      secondFloorSurfaceLightCount: 0,
      secondFloorBathFan: false,
      secondFloorBathFanCount: false,
      secondFloorCeilingFan: false,
      secondFloorCeilingFanCount: false,
      secondFloorDedicated: false,
      secondFloorSmoke: false,
      secondFloorSmokeCount: 0,
      secondFloorCO: false,
      secondFloorOther: false,
      secondFloorOtherText: false,
      secondFloorRec: '',
      thirdFloor: '',
      thirdFloorRewire: false,
      thirdFloorRewiring: 'entire floor',
      thirdFloorRL: false,
      thirdFloorRLCount: false,
      thirdFloorSurfaceLight: false,
      thirdFloorSurfaceLightCount: 0,
      thirdFloorBathFan: false,
      thirdFloorBathFanCount: false,
      thirdFloorCeilingFan: false,
      thirdFloorCeilingFanCount: false,
      thirdFloorDedicated: false,
      thirdFloorSmoke: false,
      thirdFloorSmokeCount: 0,
      thirdFloorCO: false,
      thirdFloorOther: false,
      thirdFloorOtherText: false,
      thirdFloorRec: ''
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

    let activeForm = this.state.activeForm;

    let renderForm = () => {

      switch (activeForm) {
        case 'basement':
          return basementForm()
        case 'first':
          return firstFloorForm()
        case 'second':
          return secondFloorForm()
        case 'third':
          return thirdFloorForm();
      }
    }



    const basementForm = () => (
      <form id="1">
        <div id="basementSection" className="column notification switchbox">
          <p className="title">
            <input
              name="basement"
              type="checkbox"
              value="Basement"
              checked={this.state.basement}
              onChange={this.handleInputChange}
            /><label className="checkbox">Basement</label></p>

          <div className="control">
            <input
              name="service"
              type="checkbox"
              checked={this.state.service}
              value="Replace service entrance cable"
              onChange={this.handleInputChange}
            /> <label className="checkbox field-label">Service</label>
          </div>

          <div className="control">
            <input
              name="meter"
              type="checkbox"
              checked={this.state.meter}
              value="Supply and install 200 amp meter"
              onChange={this.handleInputChange}
            /><label className="checkbox">Meter</label>
          </div>
          <div className="control">
            <input
              name="panel"
              type="checkbox"
              checked={this.state.panel}
              value="Supply and install 200 amp panel"
              onChange={this.handleInputChange}
            /><label className="checkbox">Panel</label>
          </div>

          <div className="control">
            <input
              name="rewire"
              type="checkbox"
              checked={this.state.rewire != false}
              value={this.state.basement1}
              onChange={this.handleInputChange}
            /><label className="checkbox field-label">Rewire</label>
            <input
              className="field-body is-small"
              name="rewire2"
              type="text"
              className="input"
              placeholder="entire floor"
              value={this.state.rewire2}
              onChange={(event) => this.setState({ rewire2: event.target.value })}
            />
          </div>

          <div className="control">
            <input
              name="basement1"
              type="checkbox"
              value={this.state.basement1}
              checked={this.state.basement1 != false}
              onChange={this.handleInputChange}
            /><label className="checkbox">Recessed lights?</label>
            <input
              name="basementRec"
              type="number" className="input"
              value={this.state.basementRec}
              onChange={(event) => this.setState({ basementRec: event.target.value })}
            />
          </div>

          <div className="control">
            <input
              name="basementLight"
              type="checkbox"
              checked={this.state.basementLight != false}
              value={this.state.basementLight}
              onChange={this.handleInputChange}
            /><label className="checkbox">Surface Mount Lighting?</label>
            <input
              name="basementLight2"
              type="number" className="input"
              value={this.state.basementLight2}
              onChange={(event) => this.setState({ basementLight2: event.target.value })}
            />
          </div>

          <div className="control">
            <input
              name="basementBathFan"
              type="checkbox"
              checked={this.state.basementBathFan != false}
              value={this.state.basementBathFan}
              onChange={this.handleInputChange}
            /><label className="checkbox">Bath Fans?</label>
            <input
              name="basementBathFan2"
              type="number" className="input"
              value={this.state.basementBathFan2}
              onChange={(event) => this.setState({ basementBathFan2: event.target.value })}
            />
          </div>

          <div className="control">
            <input
              name="basementCeilingFan"
              type="checkbox"
              checked={this.state.basementCeilingFan != false}
              value={this.state.basementCeilingFan}
              onChange={this.handleInputChange}
            /><label className="checkbox">Ceiling Fans?</label>
            <input
              name="basementCeilingFan2"
              type="number" className="input"
              value={this.state.basementCeilingFan2}
              onChange={(event) => this.setState({ basementCeilingFan2: event.target.value })}
            />
          </div>

          <div className="control">
            <input
              name="basementDedicated"
              type="checkbox"
              checked={this.state.basementDedicated != false}
              value={this.state.basementDedicated}
              onChange={this.handleInputChange}
            />
            <label className="checkbox">Dedicated Circuits?</label>

          </div>

          <div className="control">
            <input
              name="basementSmoke"
              type="checkbox"
              checked={this.state.basementSmoke}
              value={this.state.basementSmoke}
              onChange={this.handleInputChange}
            /><label className="checkbox">Smoke Detectors</label>
            <input
              name="basementSmoke2"
              type="number" className="input"
              value={this.state.basementSmoke2}
              onChange={(event) => this.setState({ basementSmoke2: event.target.value })}
            />
          </div>

          <div className="control">
            <input
              name="basementCo"
              type="checkbox"
              checked={this.state.basementCo != false}
              value={this.state.basementCo}
              onChange={this.handleInputChange}
            /><label className="checkbox">CO Detectors</label>
            <input
              name="basementSmoke2"
              type="number" className="input"
              value={this.state.basementCo2}
              onChange={(event) => this.setState({ basementCo2: event.target.value })}
            />
          </div>

          <div className="control">
            <input
              name="basementOther"
              type="checkbox"
              checked={this.state.basementOther}
              value={this.state.basementOther}
              onChange={this.handleInputChange}
            />
            <input
              name="basementOther2"
              type="text"
              className="input"
              className="input"
              value={this.state.basementOther2}
              onChange={(event) => this.setState({ basementOther2: event.target.value })}
            />
          </div>
        </div>
      </form>
    )
    const basementItems = (<ul>
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
    </ul>)

    const firstFloorForm = () => (
      <form id="2">
        <div id="firstFloor" className="column notification is-dark switchbox ">
          <p class="title">
            <input
              name="firstFloor"
              type="checkbox"
              value="First Floor"
              checked={this.state.firstFloor}
              onChange={this.handleInputChange}
            />
            <label className="checkbox">First Floor</label>
          </p>
          <div className="control">
            <input
              name="firstFloorRewire"
              type="checkbox"
              checked={this.state.firstFloorRewire != false}
              value={this.state.firstFloorRewire}
              onChange={this.handleInputChange}
            /><label className="checkbox">Rewire</label>
            <input
              name="firstFloorRewiring"
              type="text"
              className="input"
              className="input"
              placeholder="entire floor"
              value={this.state.firstFloorRewiring}
              onChange={(event) => this.setState({ firstFloorRewiring: event.target.value })}
            />
          </div>
          <div className="control">
            <input
              name="firstFloorRL"
              type="checkbox"
              checked={this.state.firstFloorRL != false}
              value={this.state.firstFloorRL}
              onChange={this.handleInputChange}
            /><label className="checkbox">Recessed lights?</label>
            <input
              name="firstFloorRLCount"
              type="number" className="input"
              value={this.state.firstFloorRLCount}
              onChange={(event) => this.setState({ firstFloorRLCount: event.target.value })}
            />
          </div>
          <div className="control">
            <input
              name="firstFloorPendantLight"
              type="checkbox"
              checked={this.state.firstFloorPendantLight != false}
              value={this.state.firstFloorPendantLight}
              onChange={this.handleInputChange}
            /><label className="checkbox">Pendant Lights?</label>
            <input
              name="firstFloorPendantLightCount"
              type="number" className="input"
              value={this.state.firstFloorPendantLightCount}
              onChange={(event) => this.setState({ firstFloorPendantLightCount: event.target.value })}
            />
          </div>
          <div className="control">
            <input
              name="firstFloorSurfaceLight"
              type="checkbox"
              checked={this.state.firstFloorSurfaceLight != false}
              value={this.state.firstFloorSurfaceLight}
              onChange={this.handleInputChange}
            /><label className="checkbox">Surface Mount Lighting?</label>
            <input
              name="firstFloorSurfaceLightAmount"
              type="number" className="input"
              value={this.state.firstFloorSurfaceLightCount}
              onChange={(event) => this.setState({ firstFloorSurfaceLightCount: event.target.value })}
            />
          </div>
          <div className="control">
            <input
              name="firstFloorBathFan"
              type="checkbox"
              checked={this.state.firstFloorBathFan != false}
              value={this.state.firstFloorBathFan}
              onChange={this.handleInputChange}
            /><label className="checkbox">Bath Fans?</label>
            <input
              name="firstFloorBathFanCount"
              type="number" className="input"
              value={this.state.firstFloorBathFanCount}
              onChange={(event) => this.setState({ firstFloorBathFanCount: event.target.value })}
            />
          </div>
          <div className="control">
            <input
              name="firstFloorCeilingFan"
              type="checkbox"
              checked={this.state.firstFloorCeilingFan != false}
              value={this.state.firstFloorCeilingFan}
              onChange={this.handleInputChange}
            /><label className="checkbox">Ceiling Fans?</label>
            <input
              name="firstFloorCeilingFanCount"
              type="number" className="input"
              value={this.state.firstFloorCeilingFanCount}
              onChange={(event) => this.setState({ firstFloorCeilingFanCount: event.target.value })}
            />
          </div>
          <div className="control">
            <input
              name="firstFloorDedicated"
              type="checkbox"
              checked={this.state.firstFloorDedicated != false}
              value={this.state.firstFloorDedicated}
              onChange={this.handleInputChange}
            />
            <label className="checkbox">Dedicated Circuits?</label>

          </div>
          <div className="control">
            <input
              name="firstFloorSmoke"
              type="checkbox"
              checked={this.state.firstFloorSmoke != false}
              value={this.state.firstFloorSmoke}
              onChange={this.handleInputChange}
            /><label className="checkbox">Smoke Detectors</label>
            <input
              name="firstFloorSmokeCount"
              type="number" className="input"
              value={this.state.firstFloorSmokeCount}
              onChange={(event) => this.setState({ firstFloorSmokeCount: event.target.value })}
            />
          </div>
          <div className="control">
            <input
              name="firstFloorCO"
              type="checkbox"
              checked={this.state.firstFloorCO != false}
              value={this.state.firstFloorCO}
              onChange={this.handleInputChange}
            /><label className="checkbox">CO Detectors?</label>
            <input
              name="firstFloorCOCount"
              type="number" className="input"
              value={this.state.firstFloorCOCount}
              onChange={(event) => this.setState({ firstFloorCOCount: event.target.value })}
            />
          </div>
          <div className="control">
            <input
              name="firstFloorOther"
              type="checkbox"
              checked={this.state.firstFloorOther != false}
              value={this.state.firstFloorOther}
              onChange={this.handleInputChange}
            />
            <input
              name="firstFloorOtherText"
              type="text"
              className="input"
              value={this.state.firstFloorOtherText}
              onChange={(event) => this.setState({ firstFloorOtherText: event.target.value })}
            />
          </div>
        </div>
      </form>
    )
    const firstFloorItems = (<ul>{this.state.firstFloorRewire ? <li>Rewire {this.state.firstFloorRewiring}: standard white switches and plugs. </li> : ''}
      {this.state.firstFloorRL ? <li>Supply and install {this.state.firstFloorRLCount} recessed light{this.state.firstFloorRLCount > 1 ? 's' : ''}</li> : ''}
      {this.state.firstFloorPendantLight ? <li>Supply and install {this.state.firstFloorPendantLightCount} pendant light{this.state.firstFloorPendantLightCount > 1 ? 's' : ''}</li> : ''}
      {this.state.firstFloorSurfaceLight ? <li>Supply and install {this.state.firstFloorSurfaceLightCount} surface mount light{this.state.firstFloorSurfaceLightCount > 1 ? 's' : ''}</li> : ''}
      {this.state.firstFloorBathFan ? <li>Install power for {this.state.firstFloorBathFanCount} bathroom exhaust fan{this.state.firstFloorBathFanCount > 1 ? 's' : ''}</li> : ''}
      {this.state.firstFloorCeilingFan ? <li>Install power for {this.state.firstFloorCeilingFanCount} ceiling fan{this.state.firstFloorCeilingFanCount > 1 ? 's' : ''}</li> : ''}
      {this.state.firstFloorDedicated ? <li>Run dedicated circuits for microwave, range, refrigerator, dishwasher, disposal, GFCI, under-cabinet lights </li> : ''}
      {this.state.firstFloorSmoke ? <li>Supply and install {this.state.firstFloorSmokeCount} smoke detector{this.state.firstFloorSmokeCount > 1 ? 's' : ''}</li> : ''}
      {this.state.firstFloorCO ? <li>Supply and install {this.state.firstFloorCOCount} CO detector{this.state.firstFloorCOCount > 1 ? 's' : ''}</li> : ''}
      {this.state.firstFloorOther ? <li>{this.state.firstFloorOtherText}</li> : ''}</ul>)

    const secondFloorForm = () => (
      <div id="secondFloor" className="column notification is-gray switchbox">
        <p class="title">
          <input
            name="secondFloor"
            type="checkbox"
            checked={this.state.secondFloor != false}
            value="Second Floor"
            onChange={this.handleInputChange}
          />
          <label className="checkbox">Second Floor</label>
        </p>
        <div className="control">
          <input
            name="secondFloorRewire"
            type="checkbox"
            checked={this.state.secondFloorRewire != false}
            value={this.state.secondFloorRewire}
            onChange={this.handleInputChange}
          /><label className="checkbox">Rewire</label>
          <input
            name="secondFloorRewiring"
            type="text"
            className="input"
            placeholder="entire floor"
            value={this.state.secondFloorRewiring}
            onChange={(event) => this.setState({ secondFloorRewiring: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="secondFloorRL"
            type="checkbox"
            checked={this.state.secondFloorRL != false}
            value={this.state.secondFloorRL}
            onChange={this.handleInputChange}
          /><label className="checkbox">Recessed lights?</label>
          <input
            name="secondFloorRLCount"
            type="number" className="input"
            value={this.state.secondFloorRLCount}
            onChange={(event) => this.setState({ secondFloorRLCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="secondFloorSurfaceLight"
            type="checkbox"
            checked={this.state.secondFloorSurfaceLight != false}
            value={this.state.secondFloorSurfaceLight}
            onChange={this.handleInputChange}
          /><label className="checkbox">Surface Mount Lighting?</label>
          <input
            name="secondFloorSurfaceLightAmount"
            type="number" className="input"
            value={this.state.secondFloorSurfaceLightCount}
            onChange={(event) => this.setState({ secondFloorSurfaceLightCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="secondFloorBathFan"
            type="checkbox"
            checked={this.state.secondFloorBathFan != false}
            value={this.state.secondFloorBathFan}
            onChange={this.handleInputChange}
          /><label className="checkbox">Bath Fans?</label>
          <input
            name="secondFloorBathFanCount"
            type="number" className="input"
            value={this.state.secondFloorBathFanCount}
            onChange={(event) => this.setState({ secondFloorBathFanCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="secondFloorCeilingFan"
            type="checkbox"
            checked={this.state.secondFloorCeilingFan != false}
            value={this.state.secondFloorCeilingFan}
            onChange={this.handleInputChange}
          /><label className="checkbox">Ceiling Fans?</label>
          <input
            name="secondFloorCeilingFanCount"
            type="number" className="input"
            value={this.state.secondFloorCeilingFanCount}
            onChange={(event) => this.setState({ secondFloorCeilingFanCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="secondFloorDedicated"
            type="checkbox"
            checked={this.state.secondFloorDedicated != false}
            value={this.state.secondFloorDedicated}
            onChange={this.handleInputChange}
          />
          <label className="checkbox">Dedicated Circuits?</label>

        </div>
        <div className="control">
          <input
            name="secondFloorSmoke"
            type="checkbox"
            checked={this.state.secondFloorSmoke != false}
            value={this.state.secondFloorSmoke}
            onChange={this.handleInputChange}
          /><label className="checkbox">Smoke Detectors</label>
          <input
            name="secondFloorSmokeCount"
            type="number" className="input"
            value={this.state.secondFloorSmokeCount}
            onChange={(event) => this.setState({ secondFloorSmokeCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="secondFloorCO"
            type="checkbox"
            checked={this.state.secondFloorCO != false}
            value={this.state.secondFloorCO}
            onChange={this.handleInputChange}
          /><label className="checkbox">CO Detectors?</label>
          <input
            name="secondFloorCOCount"
            type="number" className="input"
            value={this.state.secondFloorCOCount}
            onChange={(event) => this.setState({ secondFloorCOCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="secondFloorOther"
            type="checkbox"
            checked={this.state.secondFloorOther != false}
            value={this.state.secondFloorOther}
            onChange={this.handleInputChange}
          />
          <input
            name="secondFloorOtherText"
            type="text"
            className="input"
            value={this.state.secondFloorOtherText}
            onChange={(event) => this.setState({ secondFloorOtherText: event.target.value })}
          />
        </div>
      </div>
    )
    const secondFloorItems = (<ul>
      {this.state.secondFloorRewire ? <li>Rewire {this.state.secondFloorRewiring}: standard white switches and plugs. </li> : ''}
      {this.state.secondFloorRL ? <li>Supply and install {this.state.secondFloorRLCount} recessed light{this.state.secondFloorRLCount > 1 ? 's' : ''}</li> : ''}
      {this.state.secondFloorSurfaceLight ? <li>Supply and install {this.state.secondFloorSurfaceLightCount} surface mount light{this.state.secondFloorSurfaceLightCount > 1 ? 's' : ''}</li> : ''}
      {this.state.secondFloorBathFan ? <li>Install power for {this.state.secondFloorBathFanCount} bathroom exhaust fan{this.state.secondFloorBathFanCount > 1 ? 's' : ''}</li> : ''}
      {this.state.secondFloorCeilingFan ? <li>Install power for {this.state.secondFloorCeilingFanCount} ceiling fan{this.state.secondFloorCeilingFanCount > 1 ? 's' : ''}</li> : ''}
      {this.state.secondFloorDedicated ? <li>Run dedicated circuits for microwave, range, refrigerator, dishwasher, disposal, GFCI, under-cabinet lights </li> : ''}
      {this.state.secondFloorSmoke ? <li>Supply and install {this.state.secondFloorSmokeCount} smoke detector{this.state.secondFloorSmokeCount > 1 ? 's' : ''}</li> : ''}
      {this.state.secondFloorCO ? <li>Supply and install {this.state.secondFloorCOCount} CO detector{this.state.secondFloorCOCount > 1 ? 's' : ''}</li> : ''}
      {this.state.secondFloorOther ? <li>{this.state.secondFloorOtherText}</li> : ''}
    </ul>)

    const thirdFloorForm = () => (
      <div id="thirdFloor" className="column notification is-dark switchbox" style={{ marginBottom: '1.5rem' }}>
        <p class="title">
          <input
            name="thirdFloor"
            type="checkbox"
            checked={this.state.thirdFloor != false}
            value="Third Floor"
            onChange={this.handleInputChange}
          />
          <label className="checkbox">Third Floor</label>
        </p>
        <div class="control">
          <input
            name="thirdFloorRewire"
            type="checkbox"
            checked={this.state.thirdFloorRewire != false}
            value={this.state.thirdFloorRewire}
            onChange={this.handleInputChange}
          /><label className="checkbox">Rewire</label>
          <input
            name="thirdFloorRewiring"
            type="text"
            className="input"
            placeholder="entire floor"
            value={this.state.thirdFloorRewiring}
            onChange={(event) => this.setState({ thirdFloorRewiring: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="thirdFloorRL"
            type="checkbox"
            checked={this.state.thirdFloorRL != false}
            value={this.state.thirdFloorRL}
            onChange={this.handleInputChange}
          /><label className="checkbox">Recessed lights?</label>
          <input
            name="thirdFloorRLCount"
            type="number" className="input"
            value={this.state.thirdFloorRLCount}
            onChange={(event) => this.setState({ thirdFloorRLCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="thirdFloorSurfaceLight"
            type="checkbox"
            checked={this.state.thirdFloorSurfaceLight != false}
            value={this.state.thirdFloorSurfaceLight}
            onChange={this.handleInputChange}
          /><label className="checkbox">Surface Mount Lighting?</label>
          <input
            name="thirdFloorSurfaceLightAmount"
            type="number" className="input"
            value={this.state.thirdFloorSurfaceLightCount}
            onChange={(event) => this.setState({ thirdFloorSurfaceLightCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="thirdFloorBathFan"
            type="checkbox"
            checked={this.state.thirdFloorBathFan != false}
            value={this.state.thirdFloorBathFan}
            onChange={this.handleInputChange}
          /><label className="checkbox">Bath Fans?</label>
          <input
            name="thirdFloorBathFanCount"
            type="number" className="input"
            value={this.state.thirdFloorBathFanCount}
            onChange={(event) => this.setState({ thirdFloorBathFanCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="thirdFloorCeilingFan"
            type="checkbox"
            checked={this.state.thirdFloorCeilingFan != false}
            value={this.state.thirdFloorCeilingFan}
            onChange={this.handleInputChange}
          /><label className="checkbox">Ceiling Fans?</label>
          <input
            name="thirdFloorCeilingFanCount"
            type="number" className="input"
            value={this.state.thirdFloorCeilingFanCount}
            onChange={(event) => this.setState({ thirdFloorCeilingFanCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="thirdFloorDedicated"
            type="checkbox"
            checked={this.state.thirdFloorDedicated != false}
            value={this.state.thirdFloorDedicated}
            onChange={this.handleInputChange}
          />
          <label className="checkbox">Dedicated Circuits?</label>

        </div>
        <div className="control">
          <input
            name="thirdFloorSmoke"
            type="checkbox"
            checked={this.state.thirdFloorSmoke != false}
            value={this.state.thirdFloorSmoke}
            onChange={this.handleInputChange}
          /><label className="checkbox">Smoke Detectors</label>
          <input
            name="thirdFloorSmokeCount"
            type="number" className="input"
            value={this.state.thirdFloorSmokeCount}
            onChange={(event) => this.setState({ thirdFloorSmokeCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="thirdFloorCO"
            type="checkbox"
            checked={this.state.thirdFloorCO != false}
            value={this.state.thirdFloorCO}
            onChange={this.handleInputChange}
          /><label className="checkbox">CO Detectors?</label>
          <input
            name="thirdFloorCOCount"
            type="number" className="input"
            value={this.state.thirdFloorCOCount}
            onChange={(event) => this.setState({ thirdFloorCOCount: event.target.value })}
          />
        </div>
        <div className="control">
          <input
            name="thirdFloorOther"
            type="checkbox"
            checked={this.state.thirdFloorOther != false}
            value={this.state.thirdFloorOther}
            onChange={this.handleInputChange}
          />
          <input
            name="thirdFloorOtherText"
            type="text"
            className="input"
            value={this.state.thirdFloorOtherText}
            onChange={(event) => this.setState({ thirdFloorOtherText: event.target.value })}
          />
        </div>
      </div>
    )
    const thirdFloorItems = (<ul>
      {this.state.thirdFloorRewire ? <li>Rewire {this.state.thirdFloorRewiring}: standard white switches and plugs. </li> : ''}
      {this.state.thirdFloorRL ? <li>Supply and install {this.state.thirdFloorRLCount} recessed light{this.state.thirdFloorRLCount > 1 ? 's' : ''}</li> : ''}
      {this.state.thirdFloorSurfaceLight ? <li>Supply and install {this.state.thirdFloorSurfaceLightCount} surface mount light{this.state.thirdFloorSurfaceLightCount > 1 ? 's' : ''}</li> : ''}
      {this.state.thirdFloorBathFan ? <li>Install power for {this.state.thirdFloorBathFanCount} bathroom exhaust fan{this.state.thirdFloorBathFanCount > 1 ? 's' : ''}</li> : ''}
      {this.state.thirdFloorCeilingFan ? <li>Install power for {this.state.thirdFloorCeilingFanCount} ceiling fan{this.state.thirdFloorCeilingFanCount > 1 ? 's' : ''}</li> : ''}
      {this.state.thirdFloorDedicated ? <li>Run dedicated circuits for microwave, range, refrigerator, dishwasher, disposal, GFCI, under-cabinet lights </li> : ''}
      {this.state.thirdFloorSmoke ? <li>Supply and install {this.state.thirdFloorSmokeCount} smoke detector{this.state.thirdFloorSmokeCount > 1 ? 's' : ''}</li> : ''}
      {this.state.thirdFloorCO ? <li>Supply and install {this.state.thirdFloorCOCount} CO detector{this.state.thirdFloorCOCount > 1 ? 's' : ''}</li> : ''}
      {this.state.thirdFloorOther ? <li>{this.state.thirdFloorOtherText}</li> : ''}
    </ul>)

    return (
      <div className="App container" >

        <div className="columns">
          <div className="column is-one-half" style={{ textAlign: 'left' }}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="title">Scope of Work</p>
              {/* <h1 className="App-title">Electrical Scope</h1> */}
            </header>
            {/* <img src={townhouse} alt="townhouse" /> */}
            <div className="output">
              <hr />

              {/*Begin Basement*/}
              <p className="title is-4">{this.state.basement}</p>
              {this.state.basement ? basementItems : ''}
              {/*End Basement*/}
              {/*Begin First Floor*/}
              <p className="title is-4">{this.state.firstFloor}</p>
              {this.state.firstFloor ? firstFloorItems : ''}
              {/*End First Floor*/}
              <p className="title is-4">{this.state.secondFloor}</p>
              {this.state.secondFloor ? secondFloorItems : ''}
              {/*End Second Floor*/}
              <p className="title is-4">{this.state.thirdFloor}</p>
              {this.state.thirdFloor ? thirdFloorItems : ''}
            </div>
          </div>
          <div className="column">
            {/* <form> */}
            <nav className="navbar">
              <div className="navbar-brand">
                <a className="button is-white is-large" onClick={(e) => {
                  e.preventDefault()
                  this.setState({ activeForm: 'basement' })
                }}>Basement</a>
                <a className="button is-white is-large" onClick={(e) => {
                  e.preventDefault()
                  this.setState({ activeForm: 'first' })
                }}>First</a>
                <a className="button is-white is-large" onClick={(e) => {
                  e.preventDefault()
                  this.setState({ activeForm: 'second' })
                }}>Second</a>
                <a className="button is-white is-large" onClick={(e) => {
                  e.preventDefault()
                  this.setState({ activeForm: 'third' })
                }}>Third</a>
              </div>
            </nav>
            <div className="columns">
              {renderForm()}
            </div>
            {/* </form> */}
          </div>
        </div>


      </div>
    );
  }
}

export default App;
