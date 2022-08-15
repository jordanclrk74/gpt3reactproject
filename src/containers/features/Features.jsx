import React from 'react';
import { Feature } from '../../components';
import './features.css'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean posuere pulvinar diam at fermentum. Donec ultricies tincidunt augue.'
  },
  {
    title: 'Become the tended active',
    text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean posuere pulvinar diam at fermentum. Donec ultricies tincidunt augue.'
  },
  {
    title: 'Message for more information',
    text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean posuere pulvinar diam at fermentum. Donec ultricies tincidunt augue.'
  },
  {
    title: 'Dreams into reality',
    text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean posuere pulvinar diam at fermentum. Donec ultricies tincidunt augue.'
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features" >
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The future is now. You just need to realize it. Step into the future today and make it happen.</h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt3_features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features 