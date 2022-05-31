import React from "react";
import Logo from "./Images/flight_black_24dp 3.png"
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-first">
        <div className="footer-first-div1">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <h3>Artic Travels</h3>
            <p>Book your trip in minutes, get full <br /> control for much longer.</p>
            <div class="social">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
            </div>
        </div>
            

        <div className="footer-first-div2">
            <div id="div1">
                <h4>COMPANY</h4>
                <p>About</p>
                <p> Careers</p>
                <p>Mobile</p>
            </div>

            <div id="div2">
                <h4>CONTACT</h4>
                <p>FAQ</p>
                <p>Press</p>
                <p>Affiliates</p>
            </div>

            <div id="div3">
                <h4>MORE</h4>
                <p>Airlines</p>
                <p> Airfees</p>
                <p>Lowfare Tips</p>
            </div>
        </div>
      </section>

      <section className="footer-second">
          <h5>© 2022 Arctic Travels - All right reserved.</h5>
          <div className="footer-second-div1">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
          </div>
      </section>
    </div>
  );
};

export default Footer;
