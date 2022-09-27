import React from 'react'
import './possibility.css'
import careertips from '../../assets/careertips.png';
import Featurescom from '../../components/featurescom/Featurescom';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={careertips} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Great Career Tips ...</h4>
      <h1 className="gradient__text">The possibilities are  beyond your imagination</h1>
      <p>Career is a very important thing in one's life. Whatever career path you choose to follow, it will impact your life greatly. Your career will define your status in a society in addition to your lifestyle.</p>
      
    </div>
    <div className='ctbuttons'>
     <a class="techc" href="https://react.school"><button type='button'>For_More_Tips...</button>
     </a></div>
  </div>
  )
}

export default Possibility
