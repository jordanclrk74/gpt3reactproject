import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est</p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility