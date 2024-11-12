import React from "react";
import s from "../TrainerCard/index.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

export default function TrainerCard({ img, name }) {
  return (
    <div className={s.cardTrainer}>
      <img src={img} />
      <p>{name}</p>
      <div>
        <FaInstagram />
        <FaXTwitter />
        <IoLogoYoutube />
      </div>
    </div>
  );
}
