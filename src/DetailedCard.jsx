import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import oneimgs from '../src/assets/newone.png';
import twoimgs from '../src/assets/newtwo.png';
import threeimgs from '../src/assets/newthree.png';
// import uploadedImg from '../src/assets/Screenshot_2024-07-15_175155.png';  // Import the uploaded image

const iconMap = {
  1: oneimgs,
  2: twoimgs,
  3: threeimgs,
//   4: uploadedImg,  // Add the uploaded image to the map
};

const DetailedCard = ({ icons, titles, descriptions, imagePosition }) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className='row detailed-card'>
      {isImageLeft && (
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <img src={iconMap[icons]} alt={titles} className='detailed-image' style={{width:'103%',maxWidth:'778px'}} />
        </div>
      )}
      <div className='col-lg-6 col-md-6 col-sm-12' style={{ paddingTop: "182px"}}>
        <h3>{titles}</h3>
        <p>{descriptions}</p>
      </div>
      {!isImageLeft && (
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <img src={iconMap[icons]} alt={titles} className='detailed-image' style={{width:'100%'}} />
        </div>
      )}
    </div>
  );
};

DetailedCard.propTypes = {
  icons: PropTypes.string.isRequired,
  titles: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default DetailedCard;
