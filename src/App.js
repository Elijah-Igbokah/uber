import './App.scss';
import BigCard from './components/BigCards/BigCards.component';
import driverImage from "./Images/Safety_Home_Img2x (1).jpg";
import citiesImage from "./Images/Cities_Home_Img2x (1).jpg";

import SmallCards from './components/SmallCards/Smallcards.component';
import AppLogoButtons from './components/AppLogoButtons/AppLogoButtons.component';
import BlackBtn from './components/BlackBtn/BlackBtn.component';
import SignUpButtons from './components/SignUpButtons/signUpBtns.component';
import { HeroSection } from './components/Header/HeroSection/HeroSection.component';
function App() {
  return (
    <div className="App">
      <HeroSection/>
      <div className='for-business'>
        <div className='for-business-container'>
          <h1>Uber for business</h1>
          <p>Transform the way your company moves and feeds its people.</p>
          <BlackBtn text="See how" />
        </div>
      </div>
      <div className='safety-section'>
        <div className='big-cards'>
          <BigCard image={driverImage} title="Our commitment to your safety" subtitle="With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users." link1="Read about our Community Guidelines" link2="See all safety features" />
          <BigCard image={citiesImage} title="Setting 10,000+ cities in motion" subtitle="The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home." link1="View all cities" />
        </div>
        <div>
          <SmallCards />
        </div>
      </div>
      <div className='app-buttons-section'>
        <div className='app-buttons-innersection'>
          <h2>There's more to love in the apps</h2>
          <AppLogoButtons />
        </div>
      </div>
      <div className='sign-up-btns'>
        <SignUpButtons class="sign-up-btn1" text="Sign up to drive" link="https://www.uber.com/signup/drive/"/>
        <SignUpButtons class="sign-up-btn2" text="Sign up to ride" link="https://get.uber.com/sign-up/?marketing_vistor_id=7393493e-73ce-413d-9c71-c0c06eaa4f56&uclick_id=beb6cbc7-e264-4bd6-9677-92eeb59de581"/>
      </div>
      


      
      
      
    </div>
  );
}

export default App;
