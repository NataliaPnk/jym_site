import React from "react";
import s from "../AboutContainer/index.module.css";

export default function AboutContainer() {
  return (
    <div className="wrapper">
      <div className={s.containerAbout}>
        <div>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum vero
            nobis atque iure impedit accusamus omnis velit eaque sit nam facere
            id, maiores incidunt quam quod! Provident optio voluptatibus
            voluptate!
            <br /> <br />
            Harum vero nobis atque iure impedit accusamus omnis velit eaque sit
            nam facere id, maiores incidunt quam quod! Provident optio
            voluptatibus voluptate!Lorem ipsum dolor.
            <br /> <br />
            Provident optio voluptatibus voluptate!Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Harum vero nobis atque iure impedit.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
}
