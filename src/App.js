import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.png';
//import townhouse from './townhouse.jpg';
import './App.css';

console.error = (function () {
  var error = console.error

  return function (exception) {
    if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
      error.apply(console, arguments)
    }
  }
})()

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clickable: false,
      DOMloaded: false,
      textAreaText: "",
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
      basementData: false,
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
      firstFloorExteriorGfci: false,
      firstFloorExteriorGfciCount: 2,
      firstFloorBathFan: false,
      firstFloorBathFanCount: false,
      firstFloorCeilingFan: false,
      firstFloorCeilingFanCount: false,
      firstFloorDedicated: false,
      firstFloorSmoke: false,
      firstFloorSmokeCount: 0,
      firstFloorCO: false,
      firstFloorData: false,
      firstFloorOther: false,
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
      secondFloorData: false,
      secondFloorOther: false,
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
      thirdFloorData: false,
      thirdFloorOther: false,
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


  selectAll = e => {
    e.preventDefault()
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(this.output);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
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
        <div id="basementSection" className="column notification switchbox is-info">
          <p className="title">
            <label className="checkbox">
              <input
                name="basement"
                type="checkbox"
                value="Basement"
                checked={this.state.basement}
                onChange={this.handleInputChange}
              />Basement
              <span class="checkmark"></span>
            </label></p>

          <div className="control">
            <label className="checkbox">
              Service
              <input
                name="service"
                type="checkbox"
                checked={this.state.service}
                value="Replace service entrance cable"
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="control">
            <label className="checkbox">Meter
              <input
                name="meter"
                type="checkbox"
                checked={this.state.meter}
                value="Supply and install 200 amp meter"
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="control">
            <label className="checkbox">Panel
            <input
                name="panel"
                type="checkbox"
                checked={this.state.panel}
                value="Supply and install 200 amp panel"
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="control">
            <label className="checkbox field-label">Rewire
            <input
                name="rewire"
                type="checkbox"
                checked={this.state.rewire != false}
                value={this.state.basement1}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>

              <input
                className="field-body is-small"
                name="rewire2"
                type="text"
                className="input freestyle"
                placeholder="entire floor"
                value={this.state.rewire2}
                onFocus={e => this.setState({ rewire: true })}
                onChange={(event) => this.setState({ rewire2: event.target.value })}
              />
            </label>
          </div>

          <div className="control">
            <label className="checkbox">Recessed lights?
            <input
                name="basement1"
                type="checkbox"
                value={this.state.basement1}
                checked={this.state.basement1 != false}
                onChange={this.handleInputChange}

              /><span class="checkmark"></span>

              <input
                name="basementRec"
                type="number"
                className="input"
                value={this.state.basementRec}
                onChange={(event) => this.setState({ basementRec: event.target.value })}
              />
            </label>
          </div>

          <div className="control">
            <label className="checkbox">Surface Mount Lighting?
            <input
                name="basementLight"
                type="checkbox"
                checked={this.state.basementLight != false}
                value={this.state.basementLight}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>

              <input
                name="basementLight2"
                type="number" className="input"
                value={this.state.basementLight2}
                onChange={(event) => this.setState({ basementLight2: event.target.value })}
              /></label>
          </div>

          <div className="control">
            <label className="checkbox">Bath Fans?
            <input
                name="basementBathFan"
                type="checkbox"
                checked={this.state.basementBathFan != false}
                value={this.state.basementBathFan}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>
              <input
                name="basementBathFan2"
                type="number" className="input"
                value={this.state.basementBathFan2}
                onChange={(event) => this.setState({ basementBathFan2: event.target.value })}
              /></label>
          </div>

          <div className="control">
            <label className="checkbox">Ceiling Fans?
            <input
                name="basementCeilingFan"
                type="checkbox"
                checked={this.state.basementCeilingFan != false}
                value={this.state.basementCeilingFan}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>

              <input
                name="basementCeilingFan2"
                type="number" className="input"
                value={this.state.basementCeilingFan2}
                onChange={(event) => this.setState({ basementCeilingFan2: event.target.value })}
              /></label>
          </div>

          <div className="control">
            <label className="checkbox">Dedicated Circuits?
            <input
                name="basementDedicated"
                type="checkbox"
                checked={this.state.basementDedicated != false}
                value={this.state.basementDedicated}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>

            </label>
          </div>

          <div className="control"><label className="checkbox">Smoke Detectors
            <input
              name="basementSmoke"
              type="checkbox"
              checked={this.state.basementSmoke}
              value={this.state.basementSmoke}
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>
            <input
              name="basementSmoke2"
              type="number" className="input"
              value={this.state.basementSmoke2}
              onChange={(event) => this.setState({ basementSmoke2: event.target.value })}
            /></label>
          </div>

          <div className="control">
            <label className="checkbox">CO Detectors
            <input
                name="basementCo"
                type="checkbox"
                checked={this.state.basementCo != false}
                value={this.state.basementCo}
                onChange={this.handleInputChange}
              />  <span class="checkmark"></span>

              <input
                name="basementSmoke2"
                type="number" className="input"
                value={this.state.basementCo2}
                onChange={(event) => this.setState({ basementCo2: event.target.value })}
              /></label>
          </div>

          <div className="control">
            <label className="checkbox">TV & Data
            <input
                name="basementData"
                type="checkbox"
                checked={this.state.basementData != false}
                value={this.state.basementData}
                onChange={this.handleInputChange}
              /><span class="checkmark"></span>

              <input
                name="basementData2"
                type="number" className="input"
                value={this.state.basementData2}
                onChange={(event) => this.setState({ basementData2: event.target.value })}
              /></label>
          </div>

          <div className="control">
            <label className="checkbox">Other
            <input
                name="basementOther"
                type="checkbox"
                checked={this.state.basementOther}
                value={this.state.basementOther}
                onChange={this.handleInputChange}
              /><span class="checkmark"></span>
              <input
                name="basementOther2"
                type="text"
                className="input freestyle"
                placeholder="other"
                value={this.state.basementOther2}
                onChange={(event) => this.setState({ basementOther2: event.target.value })}
              />
            </label>
          </div>
        </div>
      </form>
    )
    const basementItems = (
      <ul>
        {this.state.service ? <li><p contentEditable="true">{this.state.service}</p></li> : ''}
        {this.state.meter ? <li><p contentEditable="true">{this.state.meter}</p></li> : ''}
        {this.state.panel ? <li><p contentEditable="true">{this.state.panel}</p></li> : ''}
        {this.state.rewire ? <li><p contentEditable="true">Rewire {this.state.rewire2}: standard white switches and plugs. </p></li> : ''}
        {this.state.basement1 ? <li><p contentEditable="true">Supply and install {this.state.basementRec} recessed light{this.state.basementRec > 1 ? 's' : ''}</p></li> : ''}
        {this.state.basementLight ? <li><p contentEditable="true">Install {this.state.basementLight2} surface mount light{this.state.basementLight2 > 1 ? 's' : ''}</p></li> : ''}
        {this.state.basementBathFan ? <li><p contentEditable="true">Install power for {this.state.basementBathFan2} bathroom exhaust fan{this.state.basementBathFan2 > 1 ? 's' : ''}</p></li> : ''}
        {this.state.basementCeilingFan ? <li><p contentEditable="true">Install power for {this.state.basementCeilingFan2} ceiling fan{this.state.basementCeilingFan2 > 1 ? 's' : ''}</p></li> : ''}
        {this.state.basementDedicated ? <li><p contentEditable="true">Run dedicated circuits for washer, dryer, furnace, and AC </p></li> : ''}
        {this.state.basementSmoke ? <li><p contentEditable="true">Supply and install {this.state.basementSmoke2} smoke detector{this.state.basementSmoke2 > 1 ? 's' : ''}</p></li> : ''}
        {this.state.basementCo ? <li><p contentEditable="true">Supply and install {this.state.basementCo2} CO detector{this.state.basementCo2 > 1 ? 's' : ''}</p></li> : ''}
        {this.state.basementData ? <li><p contentEditable="true">Supply and install {this.state.basementData2} TV & Data/Phone outlet{this.state.basementData2 > 1 ? 's' : ''}</p></li> : ''}
        {this.state.basementOther ? <li><p contentEditable="true">{this.state.basementOther2}</p></li> : ''}
      </ul>)


    const firstFloorForm = () => (
      <form id="2">
        <div id="firstFloor" className="column notification is-warning switchbox ">
          <p class="title">
            <label className="checkbox">First Floor
            <input
                name="firstFloor"
                type="checkbox"
                value="First Floor"
                checked={this.state.firstFloor}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>
            </label>
          </p>
          <div className="control"> <label className="checkbox">Rewire
            <input
              name="firstFloorRewire"
              type="checkbox"
              checked={this.state.firstFloorRewire != false}
              value={this.state.firstFloorRewire}
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>
            <input
              name="firstFloorRewiring"
              type="text"
              className="input freestyle"
              placeholder="entire floor"
              value={this.state.firstFloorRewiring}
              onFocus={e => this.setState({ firstFloorRewire: true })}
              onChange={(event) => this.setState({ firstFloorRewiring: event.target.value })}
            /></label>
          </div>
          <div className="control">
            <label className="checkbox">Recessed lights?
            <input
                name="firstFloorRL"
                type="checkbox"
                checked={this.state.firstFloorRL != false}
                value={this.state.firstFloorRL}
                onChange={this.handleInputChange}
              /><span class="checkmark"></span>
              <input
                name="firstFloorRLCount"
                type="number" className="input"
                value={this.state.firstFloorRLCount}
                onChange={(event) => this.setState({ firstFloorRLCount: event.target.value })}
              />
            </label>
          </div>
          <div className="control">
            <label className="checkbox">Pendant Lights?
            <input
                name="firstFloorPendantLight"
                type="checkbox"
                checked={this.state.firstFloorPendantLight != false}
                value={this.state.firstFloorPendantLight}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>

              <input
                name="firstFloorPendantLightCount"
                type="number" className="input"
                value={this.state.firstFloorPendantLightCount}
                onChange={(event) => this.setState({ firstFloorPendantLightCount: event.target.value })}
              />
            </label>
          </div>
          <div className="control">
            <label className="checkbox">Exterior GFCI Plugs?
            <input
                name="firstFloorExteriorGfci"
                type="checkbox"
                checked={this.state.firstFloorExteriorGfci != false}
                value={this.state.firstFloorExteriorGfci}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>

              <input
                name="firstFloorExteriorGfciCount"
                type="number" className="input"
                value={this.state.firstFloorExteriorGfciCount}
                onChange={(event) => this.setState({ firstFloorExteriorGfciCount: event.target.value })}
              />
            </label>
          </div>
          <div className="control">
            <label className="checkbox">Surface Mount Lighting?
              <input
                name="firstFloorSurfaceLight"
                type="checkbox"
                checked={this.state.firstFloorSurfaceLight != false}
                value={this.state.firstFloorSurfaceLight}
                onChange={this.handleInputChange}
              /><span class="checkmark"></span>
              <input
                name="firstFloorSurfaceLightAmount"
                type="number" className="input"
                value={this.state.firstFloorSurfaceLightCount}
                onChange={(event) => this.setState({ firstFloorSurfaceLightCount: event.target.value })}
              />
            </label>
          </div>
          <div className="control">
            <label className="checkbox">Bath Fans?
              <input
                name="firstFloorBathFan"
                type="checkbox"
                checked={this.state.firstFloorBathFan != false}
                value={this.state.firstFloorBathFan}
                onChange={this.handleInputChange}
              /><span class="checkmark"></span>
              <input
                name="firstFloorBathFanCount"
                type="number" className="input"
                value={this.state.firstFloorBathFanCount}
                onChange={(event) => this.setState({ firstFloorBathFanCount: event.target.value })}
              />
            </label>
          </div>
          <div className="control">
            <label className="checkbox">Ceiling Fans?
              <input
                name="firstFloorCeilingFan"
                type="checkbox"
                checked={this.state.firstFloorCeilingFan != false}
                value={this.state.firstFloorCeilingFan}
                onChange={this.handleInputChange}
              /><span class="checkmark"></span>
              <input
                name="firstFloorCeilingFanCount"
                type="number" className="input"
                value={this.state.firstFloorCeilingFanCount}
                onChange={(event) => this.setState({ firstFloorCeilingFanCount: event.target.value })}
              />
            </label>
          </div>
          <div className="control">
            <label className="checkbox">Dedicated Circuits?
              <input
                name="firstFloorDedicated"
                type="checkbox"
                checked={this.state.firstFloorDedicated != false}
                value={this.state.firstFloorDedicated}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>

            </label>
          </div>
          <div className="control">
            <label className="checkbox">Smoke Detectors
              <input
                name="firstFloorSmoke"
                type="checkbox"
                checked={this.state.firstFloorSmoke != false}
                value={this.state.firstFloorSmoke}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>
              <input
                name="firstFloorSmokeCount"
                type="number" className="input"
                value={this.state.firstFloorSmokeCount}
                onChange={(event) => this.setState({ firstFloorSmokeCount: event.target.value })}
              />
            </label>
          </div>
          <div className="control">
            <label className="checkbox">CO Detectors?
            <input
                name="firstFloorCO"
                type="checkbox"
                checked={this.state.firstFloorCO != false}
                value={this.state.firstFloorCO}
                onChange={this.handleInputChange}
              /><span class="checkmark"></span>
              <input
                name="firstFloorCOCount"
                type="number" className="input"
                value={this.state.firstFloorCOCount}
                onChange={(event) => this.setState({ firstFloorCOCount: event.target.value })}
              />
            </label>
          </div>
          <div className="control">
            <label className="checkbox">TV & Data
            <input
                name="firstFloorData"
                type="checkbox"
                checked={this.state.firstFloorData != false}
                value={this.state.firstFloorData}
                onChange={this.handleInputChange}
              />
              <span class="checkmark"></span>

              <input
                name="firstFloorData2"
                type="number" className="input"
                value={this.state.firstFloorData2}
                onChange={(event) => this.setState({ firstFloorData2: event.target.value })}
              /></label>
          </div>


          <div className="control">
            <label className="checkbox">Other
            <input
                name="firstFloorOther"
                type="checkbox"
                checked={this.state.firstFloorOther != false}
                value={this.state.firstFloorOther}
                onChange={this.handleInputChange}
              /><span class="checkmark"></span>
              <input
                name="firstFloorOtherText"
                type="text"
                className="input freestyle"
                placeholder="other"
                value={this.state.firstFloorOtherText}
                onFocus={e => this.setState({ firstFloorOther: true })}
                onChange={(event) => this.setState({ firstFloorOtherText: event.target.value })}
              />
            </label>
          </div>
        </div>
      </form>
    )
    const firstFloorItems = (<ul>
      {this.state.firstFloorRewire ? <li><p contentEditable="true">Rewire {this.state.firstFloorRewiring}: standard white switches and plugs. </p></li> : ''}
      {this.state.firstFloorRL ? <li><p contentEditable="true">Supply and install {this.state.firstFloorRLCount} recessed light{this.state.firstFloorRLCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.firstFloorPendantLight ? <li><p contentEditable="true">Supply and install {this.state.firstFloorPendantLightCount} pendant light{this.state.firstFloorPendantLightCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.firstFloorExteriorGfci ? <li><p contentEditable="true">Supply and install {this.state.firstFloorExteriorGfciCount} exterior GFCI</p></li> : ''}
      {this.state.firstFloorSurfaceLight ? <li><p contentEditable="true">Install {this.state.firstFloorSurfaceLightCount} surface mount light{this.state.firstFloorSurfaceLightCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.firstFloorBathFan ? <li><p contentEditable="true">Install power for {this.state.firstFloorBathFanCount} bathroom exhaust fan{this.state.firstFloorBathFanCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.firstFloorCeilingFan ? <li><p contentEditable="true">Install {this.state.firstFloorCeilingFanCount} ceiling fan{this.state.firstFloorCeilingFanCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.firstFloorDedicated ? <li><p contentEditable="true">Run dedicated circuits for microwave, range, refrigerator, dishwasher, disposal, GFCI, under-cabinet lights </p></li> : ''}
      {this.state.firstFloorSmoke ? <li><p contentEditable="true">Supply and install {this.state.firstFloorSmokeCount} smoke detector{this.state.firstFloorSmokeCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.firstFloorCO ? <li><p contentEditable="true">Supply and install {this.state.firstFloorCOCount} CO detector{this.state.firstFloorCOCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.firstFloorData ? <li><p contentEditable="true">Supply and install {this.state.firstFloorData2} TV & Data/Phone outlet{this.state.firstFloorData2 > 1 ? 's' : ''}</p></li> : ''}
      {this.state.firstFloorOther ? <li><p contentEditable="true">{this.state.firstFloorOtherText}</p></li> : ''}</ul>)

    const secondFloorForm = () => (
      <div id="secondFloor" className="column notification is-info switchbox">
        <p class="title"><label className="checkbox">Second Floor
          <input
            name="secondFloor"
            type="checkbox"
            checked={this.state.secondFloor != false}
            value="Second Floor"
            onChange={this.handleInputChange}
          />
          <span class="checkmark"></span>
        </label>
        </p>
        <div className="control">
          <label className="checkbox">Rewire
          <input
              name="secondFloorRewire"
              type="checkbox"
              checked={this.state.secondFloorRewire != false}
              value={this.state.secondFloorRewire}
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>

            <input
              name="secondFloorRewiring"
              type="text"
              className="input freestyle"
              placeholder="entire floor"
              value={this.state.secondFloorRewiring}
              onFocus={e => this.setState({ secondFloorRewire: true })}
              onChange={(event) => this.setState({ secondFloorRewiring: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Recessed lights?
            <input
              name="secondFloorRL"
              type="checkbox"
              checked={this.state.secondFloorRL != false}
              value={this.state.secondFloorRL}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>

            <input
              name="secondFloorRLCount"
              type="number" className="input"
              value={this.state.secondFloorRLCount}
              onChange={(event) => this.setState({ secondFloorRLCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Surface Mount Lighting?

            <input
              name="secondFloorSurfaceLight"
              type="checkbox"
              checked={this.state.secondFloorSurfaceLight != false}
              value={this.state.secondFloorSurfaceLight}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>
            <input
              name="secondFloorSurfaceLightAmount"
              type="number" className="input"
              value={this.state.secondFloorSurfaceLightCount}
              onChange={(event) => this.setState({ secondFloorSurfaceLightCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Bath Fans?
            <input
              name="secondFloorBathFan"
              type="checkbox"
              checked={this.state.secondFloorBathFan != false}
              value={this.state.secondFloorBathFan}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>

            <input
              name="secondFloorBathFanCount"
              type="number" className="input"
              value={this.state.secondFloorBathFanCount}
              onChange={(event) => this.setState({ secondFloorBathFanCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Ceiling Fans?
            <input
              name="secondFloorCeilingFan"
              type="checkbox"
              checked={this.state.secondFloorCeilingFan != false}
              value={this.state.secondFloorCeilingFan}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>

            <input
              name="secondFloorCeilingFanCount"
              type="number" className="input"
              value={this.state.secondFloorCeilingFanCount}
              onChange={(event) => this.setState({ secondFloorCeilingFanCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Dedicated Circuits?
            <input
              name="secondFloorDedicated"
              type="checkbox"
              checked={this.state.secondFloorDedicated != false}
              value={this.state.secondFloorDedicated}
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Smoke Detectors
            <input
              name="secondFloorSmoke"
              type="checkbox"
              checked={this.state.secondFloorSmoke != false}
              value={this.state.secondFloorSmoke}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>
            <input
              name="secondFloorSmokeCount"
              type="number" className="input"
              value={this.state.secondFloorSmokeCount}
              onChange={(event) => this.setState({ secondFloorSmokeCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">CO Detectors?
            <input
              name="secondFloorCO"
              type="checkbox"
              checked={this.state.secondFloorCO != false}
              value={this.state.secondFloorCO}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>
            <input
              name="secondFloorCOCount"
              type="number" className="input"
              value={this.state.secondFloorCOCount}
              onChange={(event) => this.setState({ secondFloorCOCount: event.target.value })}
            />
          </label>
        </div>

        <div className="control">
          <label className="checkbox">TV & Data
            <input
              name="secondFloorData"
              type="checkbox"
              checked={this.state.secondFloorData != false}
              value={this.state.secondFloorData}
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>

            <input
              name="secondFloorData2"
              type="number" className="input"
              value={this.state.secondFloorData2}
              onChange={(event) => this.setState({ secondFloorData2: event.target.value })}
            /></label>
        </div>


        <div className="control">
          <label className="checkbox">Other?
          <input
              name="secondFloorOther"
              type="checkbox"
              checked={this.state.secondFloorOther != false}
              value={this.state.secondFloorOther}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>
            <input
              name="secondFloorOtherText"
              id="other3"
              type="text"
              className="input freestyle"
              placeholder="other text"
              value={this.state.secondFloorOtherText}
              onFocus={e => this.setState({ secondFloorOther: true })}
              onChange={(event) => this.setState({ secondFloorOtherText: event.target.value })}
            />
          </label>
        </div>
      </div>
    )
    const secondFloorItems = (<ul>
      {this.state.secondFloorRewire ? <li><p contentEditable="true">Rewire {this.state.secondFloorRewiring}: standard white switches and plugs. </p></li> : ''}
      {this.state.secondFloorRL ? <li><p contentEditable="true">Supply and install {this.state.secondFloorRLCount} recessed light{this.state.secondFloorRLCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.secondFloorSurfaceLight ? <li><p contentEditable="true">Install {this.state.secondFloorSurfaceLightCount} surface mount light{this.state.secondFloorSurfaceLightCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.secondFloorBathFan ? <li><p contentEditable="true">Install power for {this.state.secondFloorBathFanCount} bathroom exhaust fan{this.state.secondFloorBathFanCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.secondFloorCeilingFan ? <li><p contentEditable="true">Install {this.state.secondFloorCeilingFanCount} ceiling fan{this.state.secondFloorCeilingFanCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.secondFloorDedicated ? <li><p contentEditable="true">Run dedicated circuits for microwave, range, refrigerator, dishwasher, disposal, GFCI, under-cabinet lights </p></li> : ''}
      {this.state.secondFloorSmoke ? <li><p contentEditable="true">Supply and install {this.state.secondFloorSmokeCount} smoke detector{this.state.secondFloorSmokeCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.secondFloorCO ? <li><p contentEditable="true">Supply and install {this.state.secondFloorCOCount} CO detector{this.state.secondFloorCOCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.secondFloorData ? <li><p contentEditable="true">Supply and install {this.state.secondFloorData2} TV & Data/Phone outlet{this.state.secondFloorData2 > 1 ? 's' : ''}</p></li> : ''}
      {this.state.secondFloorOther ? <li><p contentEditable="true">{this.state.secondFloorOtherText}</p></li> : ''}
    </ul>)

    const thirdFloorForm = () => (
      <div id="thirdFloor" className="column notification is-warning switchbox" style={{ marginBottom: '1.5rem' }}>
        <p class="title">
          <label className="checkbox">Third Floor
          <input
              name="thirdFloor"
              type="checkbox"
              checked={this.state.thirdFloor != false}
              value="Third Floor"
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>
          </label>
        </p>
        <div class="control">
          <label className="checkbox">Rewire
            <input
              name="thirdFloorRewire"
              type="checkbox"
              checked={this.state.thirdFloorRewire != false}
              value={this.state.thirdFloorRewire}
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>

            <input
              name="thirdFloorRewiring"
              type="text"
              className="input freestyle"
              placeholder="entire floor"
              value={this.state.thirdFloorRewiring}
              onFocus={e => this.setState({ thirdFloorRewire: true })}
              onChange={(event) => this.setState({ thirdFloorRewiring: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Recessed lights?
            <input
              name="thirdFloorRL"
              type="checkbox"
              checked={this.state.thirdFloorRL != false}
              value={this.state.thirdFloorRL}
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>

            <input
              name="thirdFloorRLCount"
              type="number" className="input"
              value={this.state.thirdFloorRLCount}
              onChange={(event) => this.setState({ thirdFloorRLCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Surface Mount Lighting?
            <input
              name="thirdFloorSurfaceLight"
              type="checkbox"
              checked={this.state.thirdFloorSurfaceLight != false}
              value={this.state.thirdFloorSurfaceLight}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>

            <input
              name="thirdFloorSurfaceLightAmount"
              type="number" className="input"
              value={this.state.thirdFloorSurfaceLightCount}
              onChange={(event) => this.setState({ thirdFloorSurfaceLightCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Bath Fans?
            <input
              name="thirdFloorBathFan"
              type="checkbox"
              checked={this.state.thirdFloorBathFan != false}
              value={this.state.thirdFloorBathFan}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>

            <input
              name="thirdFloorBathFanCount"
              type="number" className="input"
              value={this.state.thirdFloorBathFanCount}
              onChange={(event) => this.setState({ thirdFloorBathFanCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Ceiling Fans?
            <input
              name="thirdFloorCeilingFan"
              type="checkbox"
              checked={this.state.thirdFloorCeilingFan != false}
              value={this.state.thirdFloorCeilingFan}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>

            <input
              name="thirdFloorCeilingFanCount"
              type="number" className="input"
              value={this.state.thirdFloorCeilingFanCount}
              onChange={(event) => this.setState({ thirdFloorCeilingFanCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">Dedicated Circuits?
            <input
              name="thirdFloorDedicated"
              type="checkbox"
              checked={this.state.thirdFloorDedicated != false}
              value={this.state.thirdFloorDedicated}
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>

          </label>
        </div>
        <div className="control">
          <label className="checkbox">Smoke Detectors
            <input
              name="thirdFloorSmoke"
              type="checkbox"
              checked={this.state.thirdFloorSmoke != false}
              value={this.state.thirdFloorSmoke}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>

            <input
              name="thirdFloorSmokeCount"
              type="number" className="input"
              value={this.state.thirdFloorSmokeCount}
              onChange={(event) => this.setState({ thirdFloorSmokeCount: event.target.value })}
            />
          </label>
        </div>
        <div className="control">
          <label className="checkbox">CO Detectors?
            <input
              name="thirdFloorCO"
              type="checkbox"
              checked={this.state.thirdFloorCO != false}
              value={this.state.thirdFloorCO}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>

            <input
              name="thirdFloorCOCount"
              type="number" className="input"
              value={this.state.thirdFloorCOCount}
              onChange={(event) => this.setState({ thirdFloorCOCount: event.target.value })}
            />
          </label>
        </div>

        <div className="control">
          <label className="checkbox">TV & Data
            <input
              name="thirdFloorData"
              type="checkbox"
              checked={this.state.thirdFloorData != false}
              value={this.state.thirdFloorData}
              onChange={this.handleInputChange}
            />
            <span class="checkmark"></span>

            <input
              name="thirdFloorData2"
              type="number" className="input"
              value={this.state.thirdFloorData2}
              onChange={(event) => this.setState({ thirdFloorData2: event.target.value })}
            /></label>
        </div>

        <div className="control">
          <label className="checkbox">Other?
            <input
              name="thirdFloorOther"
              type="checkbox"
              checked={this.state.thirdFloorOther != false}
              value={this.state.thirdFloorOther}
              onChange={this.handleInputChange}
            /><span class="checkmark"></span>
            <input
              name="thirdFloorOtherText"
              id="other3"
              type="text"
              className="input freestyle"
              placeholder="other"
              value={this.state.thirdFloorOtherText}
              onFocus={e => this.setState({ thirdFloorOther: true })}
              onChange={(event) => this.setState({ thirdFloorOtherText: event.target.value })}
            />
          </label>
        </div>
      </div>
    )
    const thirdFloorItems = (<ul>
      {this.state.thirdFloorRewire ? <li><p contentEditable="true">Rewire {this.state.thirdFloorRewiring}: standard white switches and plugs. </p></li> : ''}
      {this.state.thirdFloorRL ? <li><p contentEditable="true">Supply and install {this.state.thirdFloorRLCount} recessed light{this.state.thirdFloorRLCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.thirdFloorSurfaceLight ? <li><p contentEditable="true">Install {this.state.thirdFloorSurfaceLightCount} surface mount light{this.state.thirdFloorSurfaceLightCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.thirdFloorBathFan ? <li><p contentEditable="true">Install power for {this.state.thirdFloorBathFanCount} bathroom exhaust fan{this.state.thirdFloorBathFanCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.thirdFloorCeilingFan ? <li><p contentEditable="true">Install {this.state.thirdFloorCeilingFanCount} ceiling fan{this.state.thirdFloorCeilingFanCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.thirdFloorDedicated ? <li><p contentEditable="true">Run dedicated circuits for microwave, range, refrigerator, dishwasher, disposal, GFCI, under-cabinet lights </p></li> : ''}
      {this.state.thirdFloorSmoke ? <li><p contentEditable="true">Supply and install {this.state.thirdFloorSmokeCount} smoke detector{this.state.thirdFloorSmokeCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.thirdFloorCO ? <li><p contentEditable="true">Supply and install {this.state.thirdFloorCOCount} CO detector{this.state.thirdFloorCOCount > 1 ? 's' : ''}</p></li> : ''}
      {this.state.thirdFloorData ? <li><p contentEditable="true">Supply and install {this.state.thirdFloorData2} TV & Data/Phone outlet{this.state.thirdFloorData2 > 1 ? 's' : ''}</p></li> : ''}
      {this.state.thirdFloorOther ? <li><p contentEditable="true">{this.state.thirdFloorOtherText}</p></li> : ''}
      <li><p>.</p></li>
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
            <div ref={r => this.output = r} className="output">
              {/*Begin Basement*/}
              <p onClick={this.selectAll} className="title is-4">{this.state.basement}</p>
              {this.state.basement ? basementItems : ''}
              {/*End Basement*/}
              {/*Begin First Floor*/}
              <p onClick={this.selectAll} className="title is-4">{this.state.firstFloor}</p>
              {this.state.firstFloor ? firstFloorItems : ''}
              {/*End First Floor*/}
              <p onClick={this.selectAll} className="title is-4">{this.state.secondFloor}</p>
              {this.state.secondFloor ? secondFloorItems : ''}
              {/*End Second Floor*/}
              <p onClick={this.selectAll} className="title is-4">{this.state.thirdFloor}</p>
              {this.state.thirdFloor ? thirdFloorItems : ''}

            </div>

            {/* form output*/}


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
