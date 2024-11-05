import React from "react";
import s from "../MembershipCard/index.module.css";
import { FaRegCheckCircle } from "react-icons/fa";

export default function MembershipCard({
  title,
  price,
  fact01,
  fact02,
  fact03,
  fact04,
}) {
  return (
    <div className={s.cardMember}>
      <div>
        <h3>{title}</h3>
        <span>{price} $ </span>
      </div>

      <div className={s.line}></div>

      <div>
        <div>
          {" "}
          <FaRegCheckCircle /> <p>{fact01}</p>{" "}
        </div>
        <div>
          {" "}
          <FaRegCheckCircle /> <p>{fact02}</p>
        </div>
        <div>
          {" "}
          <FaRegCheckCircle /> <p>{fact03}</p>
        </div>
        <div>
          {" "}
          <FaRegCheckCircle /> <p>{fact04}</p>
        </div>
      </div>

      <button>Buy</button>
    </div>
  );
}
