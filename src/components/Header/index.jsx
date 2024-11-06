import React from "react";
import s from "../Header/index.module.css";
import { MdOutlineSportsGymnastics } from "react-icons/md";

export default function Header({ onNavigate }) {
  return (
    <header className={s.header}>
      <nav>
        <div>
          <span>FlexFit <span>Gym</span></span>
          <MdOutlineSportsGymnastics />
        </div>

        <div>
          <p onClick={() => onNavigate('advantages')}>Advantages</p>
          <p onClick={() => onNavigate('membership')}>Membership</p>
          <p onClick={() => onNavigate('about')}>About</p>
          <p onClick={() => onNavigate('trainers')}>Trainers</p>
        </div>
      </nav>
    </header>
  );
}
