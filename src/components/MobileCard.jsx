import React from 'react';

const MobileCard = ({ image, name, url, collector, context }) => {

  return (
    <div className='center'>
      <div className='mobile--text'>
        <p className='mobile--textLeft'>
          {name}
        </p>
        <p className ='mobile--textRight'>
          #{collector}
        </p>
      </div>
      <div className= 'mobile--imageBox'>
        <img src={image}
         alt='Slime'
         className='slimeImage'
         ></img>
     </div>
     <div className= 'mobile--context'>
      <p>
        {context}
      </p>
     </div>
        <a href={url}>
          <img src={require('./opensea.png')} className='mobile--opensea' alt='opeasea-logo'></img>
        </a>
    </div>
  )
}

export default MobileCard;
