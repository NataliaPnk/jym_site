import React, { useContext } from "react";
import s from "../TrainersContainer/index.module.css";
import { Context } from "../../context";
import TrainerCard from "../TrainerCard";

export default function TrainersContainer() {
  const { trainers } = useContext(Context);

  return (
    <div className="wrapper">
      <h2 className={s.titleTrainers}>Trainers Staff</h2>
      <div className={s.containerTrainer}>
        {trainers.map((el) => (
          <TrainerCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
