import React from "react";
import s from "../AdvantageCard/index.module.css";

export default function AdvantageCard({ icon, title, description }) {
  return (
    <div className={s.card}>
      {icon}

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
