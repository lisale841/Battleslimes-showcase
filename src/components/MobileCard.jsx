import React from 'react';

const MobileCard = ({ image, name, url }) => {

  return (
    <div className='center'>
      <img src={image}
        alt='Slime'
        className='slimeImage'
      ></img>
      <div className='text--box'>
        <span className='mobile--text'>
          {name}
        </span>
        <br />
        <a href={url}>
          <img src={require('./opensea.png')} className='mobile--opensea' alt='opeasea-logo'></img>
        </a>
      </div>

    </div>
  )
}

export default MobileCard;
