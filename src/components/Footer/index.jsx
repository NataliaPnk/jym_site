import React from "react";
import s from "../Footer/index.module.css";
import { PiPhoneDuotone } from "react-icons/pi";
import { MdLocalPostOffice } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div>
        <div>
          <h3>
            FlexFit <span>Gym</span>
          </h3>
          <p>
            Empower yourself with cutting-edge <br /> fitness at our facility,{" "}
            <br /> offering premium equipment, <br />
            tailored coaching, and a supportive atmosphere.
          </p>
        </div>

        <div>
          <h4>Location</h4>
          <p>
            Germany <br /> Berlin, Friedrichstraße 123
          </p>
        </div>

        <div>
          <h4>Get in Touch</h4>
          <div>
            <div>
              {" "}
              <PiPhoneDuotone /> <p>+49 30 1234 5678</p>{" "}
            </div>
            <div>
              {" "}
              <MdLocalPostOffice /> <p>flexFitGym@gmail.com </p>
            </div>
          </div>
          <div>
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
            <IoLogoYoutube />
          </div>
        </div>
      </div>
    </div>
  );
}
