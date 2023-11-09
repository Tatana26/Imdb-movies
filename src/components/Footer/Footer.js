import React from "react";
import "./Footer.css";
import facebook from "./images/Facebook.svg";
import instagram from "./images/Instagram.svg";
import linkedId from "./images/LinkedIn.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLists">
        <ul className="footerList">
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul className="footerList">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul className="footerList">
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
        <ul className="footerList">
          <li>image</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <ul className="icons">
        <li>
          <img className="footerIcon" src={instagram} alt="logo"></img>
        </li>
        <li>
          <img className="footerIcon" src={facebook} alt="logo"></img>
        </li>
        <li>
          <img className="footerIcon" src={linkedId} alt="logo"></img>
        </li>
      </ul>
      <div>
        <p className="footerText">
          All rights reserved &copy; 2023, by Lasha Tatanashvili
        </p>
      </div>
    </div>
  );
};

export default Footer;
