import React from 'react';
import { AppLogoButtonsItems } from '../../Utilities/Objects';
import "./AppLogoButtons.styles.scss";



const AppLogoButtons = () => {
  return (
    <div className='app-logo-buttons'>
        {
            AppLogoButtonsItems.map(({logo, text, link, arrow}) => {
                return(
                    <a href={link}>
                        <img src={logo} alt="" />
                        <div className='text'>{text}</div>
                        <img className='arrow-right' src={arrow} alt="" />
                    </a>
                )
            })
        }
        
    </div>
  )
};

export default AppLogoButtons;