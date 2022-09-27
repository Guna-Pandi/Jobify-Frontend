import React from 'react'
import './gpt3.css'

import Featurescom from '../../components/featurescom/Featurescom';

const Gpt3 = () =>  (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature"> 
      <Featurescom title="List of popular career options in India" text="Career is a very important thing in one's life. Whatever career path you choose to follow, it will impact your life greatly. Your career will define your status in a society in addition to your lifestyle" />
      </div>
     <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
     </div>
     < div className='gpt3__whatgpt3-container'>

      { /* note need to change ref link */}
    <div className='cbuttons'>
     <a class="techc" href="https://react.school"><button type='button'>Finance Careers</button></a>
     <a  class="techc" href="https://react.school"><button type='button'>Technology Careers</button></a>
     <a  class="techc" href="https://react.school"><button type='button'>Marketing Careers</button></a>
     <a  class="techc" href="https://react.school"><button type='button'>Operations Careers</button></a>
     <a  class="techc" href="https://react.school"><button type='button'>Accounting Careers</button></a>
     <a  class="techc" href="https://react.school"><button type='button'>Entrepreneurship Careers</button></a>
     <a class="techc" href="https://react.school"><button type='button'>LegalCareers</button></a>
     
     </div>
    </div> 
    </div>
    

  );


export default Gpt3
