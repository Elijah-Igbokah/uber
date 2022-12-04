import React from 'react';
import "./BlackBtn.styles.scss";

const BlackBtn = (Props) => {
  return (
    <div className="BlackBtn">
        <a href={Props.link}>
            {Props.text}
        </a>
    </div>
    
  );
}

export default BlackBtn;