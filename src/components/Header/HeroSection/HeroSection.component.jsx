import React from 'react';
import bgImage1 from "../../../Images/DotCom_Update_Earner_bg2x.jpg";
import bgImage2 from "../../../Images/DotCom_Update_Rider_bg2x.jpg"
import bgImage3 from "../../../Images/Eats_Home_bg_desktop2x.jpg";
import icon1 from "../../../Images/Earn.svg";
import icon2 from "../../../Images/Restaurant location.svg";
import icon3 from "../../../Images/Car.svg";



import "./HeroSection.styles.scss";
import BlackBtn from '../../BlackBtn/BlackBtn.component';


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
        // const menuList = document.querySelectorAll(".option");
        
        function LoadMenu(){
            let first = document.getElementById("first");
            first.classList.add("option-border")
        }
        // for (let menu of menuList) {
        //     menu.addEventListener("click", function(){
        //         // 1. Remove Class from All Lis
        //         for (let menu of menuList) {
        //           menu.classList.remove('option-border');
        //           console.log('class removed');
        //         }
                
        //         // // 2. Add Class to Relevant Li
        //         // this.classList.add('option-border');
        //         // console.log('class added');
        //       });
        // }
        
        if (currentState === "option"){
            message = <div className='drive-deliver'>
                <h1>Get in the driver's seat and get paid</h1>
                <p>Drive on the platform with the largest network of active riders.</p>
                <BlackBtn text="Sign up to drive" />
                <a href="/">Learn more about driving and delivering</a>
            </div>;
            bgImage = bgImage1;
            
        } else if (currentState === "option2") {
            message = <div className='drive-deliver'>
                    <h1>Discover delicious eats</h1>
                    <p>Order delivery from restaurants you love.</p>
                    <div className='flex-link'>
                        <BlackBtn text="Order now" link="https://www.ubereats.com/?uclick_id=beb6cbc7-e264-4bd6-9677-92eeb59de581" />
                        <a href="/">Own a restaurant? Partner with Uber Eats</a>
                    </div>
                    
                </div>;
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
                        <button className='option' id='first' onClick={this.option} onLoad={LoadMenu}>
                            <img src={icon1} alt="" />
                            <p>Drive or deliver</p>
                        </button>
                        <button className='option' onClick={() => {
                            this.option2();
                            let first = document.getElementById("first");
                            first.classList.remove("option-border");
                        }}>
                            <img src={icon2} alt="" />
                            <p>Eat</p>
                        </button>
                        <button className='option' onClick={this.option3}>
                            <img src={icon3} alt="" />
                            <p>Ride</p>
                        </button>
                    </div>
                    {message}
                </div>
            </div>
          )

        }

}