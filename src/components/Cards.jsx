import React from 'react';

const Card = ({image, name, collector,url,context}) => {

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
      <div className='slime--box'>
      <img src={image}
      alt='Slime'
      className= 'slimeImage'
      ></img>
      </div>
     {context && <p className='text--description'>
      {context}
      </p>}
        <br />
        { url && <a href ={url}>
          <img src={require('./opensea.png')} className='opensea' alt='opeasea-logo'></img>
        </a>}


    </div>
  )
}

export default Card;
