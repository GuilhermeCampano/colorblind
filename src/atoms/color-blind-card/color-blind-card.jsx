import React from 'react';
import style from './color-blind-card.scss';
const blinder = require('color-blind');

export default class ColorBlindCard extends React.Component {
  constructor(props) {
    super(props);
    this.background = '';
    this.textColor = '';
    this.text = '';
  }
  getColorBlind = (originalColor,colorBlindType) => {
    if (originalColor && colorBlindType && originalColor.length == 7) {
      return blinder[colorBlindType](originalColor);
    } else {
      return '';
    }
  }
  capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);

  }
  componentWillMount= () => {
    this.background = this.getColorBlind(this.props.originalColor, this.props.colorBlindType);
    this.text = this.capitalizeFirstLetter(this.props.colorBlindType);
  }
  render() {
    return(
        <div className={'card-panel ' + style.colorBlindCard} style={{background:this.background}}>
          <span className="white-text">{this.text}</span>
        </div>
    )
  }
}
