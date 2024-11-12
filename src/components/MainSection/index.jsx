import React from "react";
import MainContainer from "../MainContainer";

const MainSection = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} className="section">
      <MainContainer />
    </section>
  );
});

export default MainSection;
