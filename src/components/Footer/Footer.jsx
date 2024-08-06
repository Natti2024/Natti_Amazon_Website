import React from 'react'
import classes from './Footer.module.css'
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.social_media}>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <AiFillTwitterCircle />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
          <a href="#">
            <SlSocialLinkedin />
          </a>
        </div>
        <div className={classes.links}>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Privacy Notice</a>
            </li>
            <li>
              <a href="#">Conditions of Use</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <div className={classes.legal}>
          <p>&copy; 2024 Amazon</p> <br />
          <p>All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer