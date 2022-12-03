import React from 'react'
import arrowRight from "../../Images/Arrow right.svg";

import "./signUpBtns.styles.scss";

const SignUpButtons = (Props) => {
  return (
    <div className={Props.class}>
        <h1>{Props.text}</h1>
        <img src={arrowRight} alt="" />
    </div>
  );
}

export default SignUpButtons;