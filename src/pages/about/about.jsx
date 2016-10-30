import React from 'react';
import ColorBlindCard from '../../atoms/color-blind-card/color-blind-card.jsx';

export default class About extends React.Component {
  render() {
    return(
      <div className="about">
        <h1> About </h1>
        <div className = 'row'>
          <div className = 'col s4'>
            <ColorBlindCard originalColor='#FF0000' colorBlindType='protanopia'/>
          </div>
          <div className = 'col s4'>
            <ColorBlindCard originalColor='#FF0000' colorBlindType='protanomaly'/>
          </div>
          <div className = 'col s4'>
            <ColorBlindCard originalColor='#FF0000' colorBlindType='deuteranomaly'/>
          </div>
        </div>

      </div>
    )
  }
}
