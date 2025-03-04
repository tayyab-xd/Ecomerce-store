import React from 'react'
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { GrSnapchat } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Muhammad Tayyab</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                <a href="https://web.snapchat.com/" target="_blank">
                  <GrSnapchat className="icons" />
                  </a>
                </div>
                <div>
                <a href="https://www.instagram.com/tayyab.xd/" target="_blank">
                  <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <a href="tel:923415928288"><h3>+92 3415918288</h3></a>
              
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} TayyabXD. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
