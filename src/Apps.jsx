// Card.js
import React from 'react';
import PropTypes from "prop-types";
import './App.css';
import oneimg from "../src/assets/one.png";
import twoimg from "../src/assets/two.png";
import threeimg from "../src/assets/three.png";



const Card = ({ icon, title, description }) => {
    const iconMap = {
        1: oneimg,
        2: twoimg,
        3: threeimg,
      };
  return (
    <>

     <div className='col-lg-4 text-center pt-5 pb-5'>
    <img src={iconMap[icon]} alt="sddddd"  />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>  
    </>
 
  );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
