import React from "react";
import TrainersContainer from "../TrainersContainer";

const TrainersSection = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} className="section">
      <TrainersContainer />
    </section>
  );
});

export default TrainersSection;
