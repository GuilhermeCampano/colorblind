import React from 'react';
var blinder = require('color-blind');
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#ffffff',
      protanopia: '',
      protanomaly:'',
      deuteranomaly: '',
      deuteranopia: '',
      tritanomaly: '',
      tritanopia: '',
      achromatomaly: '',
      achromatopsia: ''
    }
  }
  getColorBlind = (originalColor,colorBlindType) => {
    if (originalColor.length == 7) {
      return blinder[colorBlindType](originalColor);
    } else {
      return this.state[colorBlindType];
    }
  }
  applyColorBlind = (originalColor) => {
    this.setState({
      color: originalColor,
      protanopia: this.getColorBlind(originalColor,'protanopia'),
      protanomaly: this.getColorBlind(originalColor,'protanomaly'),
      deuteranomaly: this.getColorBlind(originalColor,'deuteranomaly'),
      deuteranopia: this.getColorBlind(originalColor,'deuteranopia'),
      tritanomaly: this.getColorBlind(originalColor,'tritanomaly'),
      tritanopia: this.getColorBlind(originalColor,'tritanopia'),
      achromatomaly: this.getColorBlind(originalColor,'achromatomaly'),
      achromatopsia: this.getColorBlind(originalColor,'achromatopsia'),
    });
  }
  handleColorChange = (e) => {
    let userInputColor = e.target.value;
    this.applyColorBlind(userInputColor);
  }
  componentDidMount = () => {}
  render() {
    return(
      <div className="home">
        <h3> Colorblind </h3>
        Fundo <input type="color"
          placeholder="color"
          maxLength="7"
          onChange={this.handleColorChange}
          value={this.state.color}
        />

        <h4 style={{background: this.state.color}}> original {this.state.color} </h4>
        <h4 style={{background: this.state.protanopia}}> protanopia {this.state.protanopia} </h4>
        <h4 style={{background: this.state.protanomaly}}> protanomaly {this.state.protanomaly} </h4>
        <h4 style={{background: this.state.deuteranomaly}}> deuteranomaly {this.state.deuteranomaly} </h4>
        <h4 style={{background: this.state.deuteranopia}}> deuteranopia {this.state.deuteranopia} </h4>
        <h4 style={{background: this.state.tritanomaly}}> tritanomaly {this.state.tritanomaly} </h4>
        <h4 style={{background: this.state.tritanopia}}> tritanopia {this.state.tritanopia} </h4>
        <h4 style={{background: this.state.achromatomaly}}> achromatomaly {this.state.achromatomaly} </h4>
        <h4 style={{background: this.state.achromatopsia}}> achromatopsia {this.state.achromatopsia} </h4>

      </div>
    )
  }
}
