import React from 'react';
import "./Footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <footer className='footer'>
    <div className='container'>
      <div className='footer_socials'>
        <a href="/" className="footer_social"><FacebookIcon/></a>
        <a href="/" className="footer_social"><InstagramIcon/></a>
        <a href="/" className="footer_social"><TwitterIcon/></a>
        <a href="/" className="footer_social"><YouTubeIcon/></a>
      </div>
      <ul className='footer_links'>
      <li className='footer_link'>
        <a href="/">lien footer</a>
      </li>
      <li className='footer_link'>
        <a href="/">lien footer</a>
      </li>
      <li className='footer_link'>
        <a href="/">lien footer</a>
      </li>
      <li className='footer_link'>
        <a href="/">lien footer</a>
      </li>
      <li className='footer_link'>
        <a href="/">lien footer</a>
      </li>
      <li className='footer_link'>
        <a href="/">lien footer</a>
      </li>
      <li className='footer_link'>
        <a href="/">lien footer</a>
      </li>
      <li className='footer_link'>
        <a href="/">lien footer</a>
      </li>
      </ul>
      <div className='footer_copy'> Netflix Clone - tous droits réservés</div>
    </div>
    </footer>
  );
}

export default Footer;
