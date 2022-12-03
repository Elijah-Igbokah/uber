import React from 'react'
import arrowRight from "../../Images/Arrow right.svg";

import "./signUpBtns.styles.scss";

const SignUpButtons = (Props) => {
  return (
    <div className={Props.class}>
        <a href={Props.link}>
            <h1>{Props.text}</h1>
            <img src={arrowRight} alt="" />
        </a>
        
    </div>
  );
}

export default SignUpButtons;