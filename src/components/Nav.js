import React, { useState } from 'react';
import "./Nav.scss";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Nav = () => {

const [navBlack,setnavBlack]=useState(false);
const [toggleMenu,settoggleMenu]=useState(false);
const transitionNav = () =>{
  window.scrollY>100 ? setnavBlack(true) : setnavBlack(false);
};

window.addEventListener("scroll",transitionNav)
//console.log(navBlack)

const handleClick=()=>{
  toggleMenu?settoggleMenu(false):settoggleMenu(true)
  console.log(toggleMenu)  
}
  return (
    <div className={`nav ${navBlack || toggleMenu ? "nav_black" :"nav_transparent"} ${toggleMenu &&"show"} `}>
      <button className='nav-burger' onClick={handleClick}>
        <MenuIcon/>
      </button>
      <img src="./images/logo2.png" className='nav-logo' alt="Netflix"/>
      <nav className='nav_links'>
        <a href="/" className="nav_link">Accueil</a>
        <a href="/" className="nav_link">Séries</a>
        <a href="/" className="nav_link">Films</a>
      </nav>
<div className='nav_actions'>
  <a href="/" className="nav_action"><SearchIcon/></a>
  <a href="/" className="nav_action">Direct </a>
  <a href="/" className="nav_action">
    <CardGiftcardIcon/> </a>
  <a href="/" className="nav_action"><NotificationsIcon/> </a>
  <a href="/" className="nav_action">
    <img src = "./images/avatar.jpg" alt="avatar" className='nav-avatar'/>
     </a>
</div>
    </div>
  );
}
export default Nav;
