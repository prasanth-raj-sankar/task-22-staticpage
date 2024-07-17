// Card.js
import React from 'react';
import PropTypes from "prop-types";
import './App.css';
import oneimg from "../src/assets/s.png";
import twoimg from "../src/assets/p.png";
import threeimg from "../src/assets/r.png";



const Cards = ({ icons, titles, descriptions }) => {
    const iconMap = {
        1: oneimg,
        2: twoimg,
        3: threeimg,
      };
  return (
    <>

     <div className='col-lg-4 text-center pt-5 pb-5'>
       
    <img src={iconMap[icons]} alt="sddddd"  />
      <h3>{titles}</h3>
      <p>{descriptions}</p>
    </div>  
    </>
 
  );
}

Cards.propTypes = {
  icons: PropTypes.string.isRequired,
  titles: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
};

export default Cards