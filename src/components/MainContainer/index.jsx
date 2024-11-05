import React from "react";
import s from "../MainContainer/index.module.css";

export default function MainContainer() {
  return (
    <div className="wrapper">
      <div className={s.container}>
        <div>
          <h1>
            Unleash Your Potential. <br /> Train, Transform, Thrive!
          </h1>
          <button>Detailed</button>
        </div>

        <img src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
}
