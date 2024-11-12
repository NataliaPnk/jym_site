import React from "react";
import AboutContainer from "../AboutContainer";

const AboutSection = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} className="section">
      <AboutContainer />
    </section>
  );
});

export default AboutSection;
