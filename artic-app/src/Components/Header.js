import React from 'react';
import "./artic.css";
import logo from "./Images/flight_black_24dp 3.png"

const Header = () => {
  return (
    <div className="header-container">
        <nav>

            <div className='logo-container'>
                <img src={logo} alt="" />
                <h3>Artic Travels</h3>
            </div>

            <ul>
                <li><a href=" ">About Us</a></li>
                <li><a href=" ">Support</a></li>
                <li><a href=" ">Language</a></li>
            </ul>
        

            <button>Sign In</button>
            
        </nav>

        <section className='hero'>
            <h3> Plan the perfect winter trip </h3>
            <p> Easily plan your ideal ski trip from home with the <br /> help of professionals </p>
        </section>

    </div>
  )
}

export default Header