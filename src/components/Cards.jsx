import React from 'react';

const Card = ({image, name, collector,url}) => {

  return(
    <div className = 'center'>
      <div className='text--box'>
        <p className='text alignleft'>
          {name}
        </p>
        <p className= 'text alignright'>
          #{collector}
        </p>
      </div>
      <img src={image}
      alt='Slime'
      className= 'slimeImage'
      ></img>
        <br />
        { url && <a href ={url}>
          <img src={require('./opensea.png')} className='opensea' alt='opeasea-logo'></img>
        </a>}

    </div>
  )
}

export default Card;
