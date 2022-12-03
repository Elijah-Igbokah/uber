import React from 'react';
import bgImage1 from "../../../Images/DotCom_Update_Earner_bg2x.jpg";
import bgImage2 from "../../../Images/DotCom_Update_Rider_bg2x.jpg"
import bgImage3 from "../../../Images/Eats_Home_bg_desktop2x.jpg";
import icon1 from "../../../Images/Earn.svg";
import icon2 from "../../../Images/Restaurant location.svg";
import icon3 from "../../../Images/Car.svg";



import "./HeroSection.styles.scss";


export class HeroSection extends React.Component {
    constructor(Props){
        super(Props);
        this.option = this.firstOption.bind(this);
        this.option2 = this.secondOption.bind(this);
        this.option3 = this.thirdOption.bind(this);
        this.state = {currentState: "option"}
    }

    firstOption(){
        this.setState({currentState: "option"});
    };

    secondOption(){
        this.setState({currentState: "option2"});
    };

    thirdOption(){
        this.setState({currentState: "option3"});
    };

    render(){
        const currentState = this.state.currentState;
        let message;
        let bgImage;
        
        if (currentState === "option"){
            message = <h1>DRIVE</h1>;
            bgImage = bgImage1;
            
        } else if (currentState === "option2") {
            message = <h1>EAT!</h1>;
            bgImage = bgImage3;
        } else {
            message = <h1>RIDE</h1>;
            bgImage = bgImage2;
        }


        return (
            <div className='hero'>
                <img className='bg-image' src={bgImage} alt="" />
                <div className='hero-menu'>
                    <div className='menu-btns'>
                        <div className='option option-border' onClick={this.option}>
                            <img src={icon1} alt="" />
                            <p>Drive or deliver</p>
                        </div>
                        <div className='option' onClick={this.option2}>
                            <img src={icon2} alt="" />
                            <p>Eat</p>
                        </div>
                        <div className='option' onClick={this.option3}>
                            <img src={icon3} alt="" />
                            <p>Ride</p>
                        </div>
                    </div>
                    {message}
                </div>
            </div>
          )

        }

}