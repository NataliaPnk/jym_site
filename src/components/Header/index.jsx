import React from "react";
import s from "../Header/index.module.css";
import { MdOutlineSportsGymnastics } from "react-icons/md";

export default function Header() {
  return (
    <div className={s.header}>
      <div>
        <div>
          <span>GYM</span>
          <MdOutlineSportsGymnastics />
        </div>

        <div>
          <p>Advantages</p>
          <p>Membership</p>
          <p>About</p>
          <p>Trainers</p>
        </div>
      </div>
    </div>
  );
}
