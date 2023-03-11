import React from 'react';
import "./footer.scss";

import facebook_icon from "../../Images/facebook.svg";
import twitter_icon from "../../Images/twitter.svg";
import youtube_icon from "../../Images/youtube.svg";
import linkedin_icon from "../../Images/linkedin.svg";
import instagram_icon from "../../Images/instagram.svg";
import playstore from "../../Images/app-store-google-4d63c31a3e (1).svg";
import applestore from "../../Images/app-store-apple-f1f919205b (1).svg";


import location_icon from "../../Images/Location marker.svg";
import globe from "../../Images/Globe.svg";



const Footer = () => {
  return (
    <div className='footer'>
        <div className='top-footer'>
          <a href="/">Uber</a>
          <p><a href="/">Visit Help Center</a></p>
        </div>
        <div className='footer-grid'>
            <div className='column'>
                <a href="/"><h2>Company</h2></a>
                <a href="/"><p>About us</p></a>
                <a href="/"><p>Our offerings</p></a>
                <a href="/"><p>Newsroom</p></a>
                <a href="/"><p>Investors</p></a>
                <a href="/"><p>Blog</p></a>
                <a href="/"><p>Careers</p></a>
                <a href="/"><p>AI</p></a>
                <a href="/"><p>Gift cards</p></a>
            </div>
            <div className='column'>
                <h2>Products</h2>
                <a href="/"><p>Ride</p></a>
                <a href="/"><p>Drive</p></a>
                <a href="/"><p>Eat</p></a>
                <a href="/"><p>Uber Freight</p></a>
            </div>
            <div className='column'>
                <h2>Global citizenship</h2>
                <a href="/"><p>Safety</p></a>
                <a href="/"><p>Diversity and Inclusion</p></a>
            </div>
            <div className='column'>
                <h2>Travel</h2>
                <a href="/"><p>Airports</p></a>
                <a href="/"><p>Cities</p></a>
            </div>
        </div>
        <div className='footer-icon-container'>
          <div className='footer-socials-wrapper'>
            <a href="/" className='footer_socials'><img className='footer_social_icon' src={facebook_icon} alt="" /></a>
            <a href="/" className='footer_socials'><img className='footer_social_icon' src={twitter_icon} alt="" /></a>
            <a href="/" className='footer_socials'><img className='footer_social_icon' src={youtube_icon} alt="" /></a>
            <a href="/" className='footer_socials'><img className='footer_social_icon' src={linkedin_icon} alt="" /></a>
            <a href="/" className='footer_socials'><img className='footer_social_icon' src={instagram_icon} alt="" /></a>
          </div>
          <div className='footer-right-icons'>
            <div className='right-icon'>
              <img className='footer_social_icon' src={globe} alt="" />
              <p>English</p>
            </div>
            <div className='right-icon'>
              <img className='footer_social_icon' src={location_icon} alt="" />
              <p>Lagos</p>
            </div>
          </div>
        </div>
        <div className='app-store'>
            <a href="https://ocie.app.link/HmhKsK15Pwb?%243p=a_custom_47734&%24uri_redirect_mode=1&uclick_id=beb6cbc7-e264-4bd6-9677-92eeb59de581&~campaign=uber-com-footer&~tune_publisher_sub1=7393493e-73ce-413d-9c71-c0c06eaa4f56"><img className='appicon' src={playstore} alt="" /></a>
            <a href="https://ocie.app.link/HmhKsK15Pwb?%243p=a_custom_47734&%24uri_redirect_mode=1&uclick_id=beb6cbc7-e264-4bd6-9677-92eeb59de581&~campaign=uber-com-footer&~tune_publisher_sub1=7393493e-73ce-413d-9c71-c0c06eaa4f56"><img src={applestore} alt="" /></a>
        </div>
        <div className='footer-icon-container'>
          <div className='footer-socials-wrapper'>
            <a href="/" className='copyrights'>© 2023 Uber Technologies Inc.</a>
          </div>
          <div className='footer-right-icons'>
            <a href="/" className='copyrights'>Privacy</a>
            <a href="/" className='copyrights'>Accessibility</a>
            <a href="/" className='copyrights'>Terms</a>
          </div>
        </div>
    </div>
  )
};

export default Footer;