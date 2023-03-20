import React from 'react';

const Card = ({image, text, url}) => {

  return(
    <div className = 'center'>
      <img src={image}
      alt='Slime'
      className= 'slimeImage'
      ></img>
      <div className='text--box'>
        <span className='text'>
          {text}
        </span>
        <br />
        { url && <a href ={url}>
          <img src={require('./opensea.png')} className='opensea' alt='opeasea-logo'></img>
        </a>}
      </div>

    </div>
  )
}

export default Card;
