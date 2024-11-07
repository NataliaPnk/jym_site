import React, { useContext } from "react";
import s from "../AboutContainer/index.module.css";
import { Context } from "../../context";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function AboutContainer() {


const { currentIndex, goToNext, goToPrevious, sliderData } = useContext(Context)


  return (
    <div className="wrapper">
      <div className={s.containerAbout}>
        <div>
          <h2>About Us</h2>
          <p>
            FlexFit Gym is a premier fitness center in downtown, spanning over
            2,000 sq. meters of cutting-edge equipment from top brands like
            Matrix, Star Trac, and Rogue Fitness. With flexible memberships,
            FlexFit Gym welcomes everyone, from beginners to seasoned athletes, <br /> <br />
            providing the perfect environment to build strength, improve
            endurance, or enhance overall wellness. Our certified trainers are
            dedicated to helping members succeed with tailored workout and
            nutrition plans for sustainable results. <br /> <br /> At FlexFit Gym, we believe
            in fostering a community that motivates, supports, and inspires each
            individual’s fitness journey.
          </p>
        </div>
        <div>
        <img src={sliderData[currentIndex]} alt="Slider" />
        <div>
        <FaArrowLeft onClick={goToNext} />
        <FaArrowRight onClick={goToPrevious} />
        </div>
        
        </div>
      </div>
    </div>
  );
}
