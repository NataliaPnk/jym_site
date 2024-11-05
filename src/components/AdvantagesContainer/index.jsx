import React, { useContext } from "react";
import { Context } from "../../context";
import AdvantageCard from "../AdvantageCard";
import s from "../AdvantagesContainer/index.module.css";

export default function AdvantagesContainer() {
  const { advantages } = useContext(Context);

  return (
    <div className="wrapper">
      <h2 className="title">Why Choose Us?</h2>
      <div className={s.container}>
        {advantages.map((el) => (
          <AdvantageCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
