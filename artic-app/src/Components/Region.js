import React from 'react';
import "./artic.css";



const Region = () => {
  return (
    <div className='region'>
        <section className='region-text'>
          <h3>Creating the best <span>ice-cold!</span> experience <br /> you would never forget.</h3>
          <p>Would you explore nature paradise in the world, find the <br /> best destination in the world with us.</p>
          <h4>View Regions available</h4>
        </section>
        
        <section className='region-container'>
            <div id="region-img1"></div> 
            <div id="region-img2"></div>
            <div id="region-img3"></div>
        </section>
    </div>
  )
}

export default Region