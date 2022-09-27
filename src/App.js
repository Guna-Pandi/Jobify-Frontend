import React from 'react';
import './App.css';


import {Brand,CTA,Navbar} from './components';
import {Blog,Features,Footer,Header,Possibility,Gpt3} from './containers';

function App () {
    
  return (
    <div className='App'>          
       
       <div className='gradient__bg'>
            <Navbar />
            <Header />   </div>
        <Brand />
        <Gpt3 />
        <Possibility />
        <CTA />
        <Features/>
        <Blog />
        <Footer />
    </div>

  );
}

export default App
