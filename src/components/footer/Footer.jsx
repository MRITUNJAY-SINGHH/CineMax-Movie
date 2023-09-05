import React from 'react';
import {
   FaFacebookF,
   FaInstagram,
   FaTwitter,
   FaLinkedin,
} from 'react-icons/fa';

import ContentWrapper from '../contentWrapper/ContentWrapper';

import './style.scss';

const Footer = () => {
   return (
      <footer className='footer'>
         <ContentWrapper>
            <ul className='menuItems'>
               <li className='menuItem'>Terms Of Use</li>
               <li className='menuItem'>Privacy-Policy</li>
               <li className='menuItem'>About</li>
               <li className='menuItem'>Blog</li>
               <li className='menuItem'>FAQ</li>
            </ul>
            <div className='infoText'>
               <p className='green'>Disclaimer for Users:</p>
               <p style={{ marginBottom: '10px' }}>
                  CineMix assumes no liability with respect to advertising or
                  betting applications/websites on this site. Visitors register
                  or deposit on advertisement websites/apps at their{' '}
                  <span style={{ color: 'red' }}>own risk.</span>
                  CineMix is not responsible for this.
               </p>
               <p className='green' style={{ marginBottom: '10px' }}>
                  <strong>Note:</strong>{' '}
               </p>
               We do not host any files on our server. All files shared here are
               collected from the internet from various Encoders and hosted on
               third-party sites. We do not accept responsibility for content
               hosted on third-party websites. We just index those links which
               are already available on the internet.
            </div>

            <div className='socialIcons'>
               <span className='icon'>
                  <FaFacebookF />
               </span>
               <span className='icon'>
                  <FaInstagram />
               </span>
               <span className='icon'>
                  <FaTwitter />
               </span>
               <span className='icon'>
                  <FaLinkedin />
               </span>
            </div>
         </ContentWrapper>
      </footer>
   );
};

export default Footer;
