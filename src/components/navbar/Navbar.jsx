import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/jobilogo.png';


const Menu=() => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#wgpt3'>All Jobs</a></p>
  <p><a href='#features'>Fresher Jobs</a></p>
  <p><a href='#possibility'>Career Tips</a></p>
  <p><a href='#Blog'>Work From Home</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
      /*BEM -> Block Element Modifier*/
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
      <div className='gpt3__navbar-links_logo'>
        <img src = {logo} alt = "logo"/>
      </div>
      <div className='gpt3__navbar-links_containers'>
       <Menu /> 
      </div>
      </div>
      <div className="gpt3__navbar-sign">
      <a href="samplelogin.html"><button type='button'>Sign In</button></a>
      <a href="#guna"><button type='button'>Sign Up</button></a>
      
       
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_containers scale-up-center">
          <div className="gpt3__navbar-menu_containers-links">
          <Menu />
          </div>
          <div className="gpt3__navbar-menu_containers-links-sign">
          <a href="#guna"><button type='button'>Sign In</button></a>
          
        <a href="#guna"><button type='button'>Sign Up</button></a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
