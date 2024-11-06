import React from "react";
import s from "../AboutContainer/index.module.css";

export default function AboutContainer() {
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
        <img src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
}
