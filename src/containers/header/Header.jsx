import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import connect from '../../assets/connect.svg';

const Header = () => {
  return (
    <div className= "gpt3__header section__padding" id="home">

      <div className="gpt3__header-content">

        <h1 className="gradient__text">  JOBS YOU NEED...</h1>
        <p>Make people to seek for job opportunities in a easier way with just in the place where they are.
          All we need is  an  application which makes searching process easier and to quickly find a job</p>

        <div className='gpt3__header-content__input'>

          <input type ="email" placeholder="Your Email Address" />
          <button type='button'>Get Started</button>

        </div>
      
        <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>

      </div>
      
      <div className="gpt3__header-image">
      <img src={connect} />
      </div>

    </div>
  )
}

export default Header
