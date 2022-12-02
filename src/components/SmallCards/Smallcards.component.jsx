import React from 'react';
import { SmallCardItems } from '../../Utilities/Objects';
import "./SmallCards.styles.scss";

const SmallCards = () => {
  return (
    <div className='small-cards'>
        {
            SmallCardItems.map(({icon, title, info, link}) => {
                return(
                    <div className='small-card'>
                        <img src={icon} alt="" />
                        <div>{title}</div>
                        <div>{info}</div>
                        <div>{link}</div>
                    </div>
                    
                )
            })
        }
    </div>
  )
};

export default SmallCards;