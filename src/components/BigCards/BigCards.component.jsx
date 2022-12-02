import React from 'react';
import "./BigCards.styles.scss";


const BigCard = (Props) => {
  return (
    <div className='big-card'>
        <div className='big-card-img'>
            <img src={Props.image} alt="" />
        </div>
        <h2 className='title'>{ Props.title }</h2>
        <p className='subtitle'> { Props.subtitle } </p>
        <div>
            <a href="/">{ Props.link1 }</a>
            <a href="/">{ Props.link2 }</a>
        </div>
    </div>
  )
}

export default BigCard;