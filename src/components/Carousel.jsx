import React, {useState } from 'react';
import {slimeData} from '../data/slimeData';
import Card from './Cards';
import './Carousel.css';
import headerImage from './battleslimelogo.png';
import footerImage from './slimes.png'


const Carousel = () => {
  const cards = slimeData;

  const[currentIndex, setCurrentIndex] = useState(0);

const findIndex = (index) => {
  const length = cards.slimes.length;
  let result = index;
  if (index < 0) {
    result = index + length;
  } else if (index >= length) {
    result = index - length;
  }
  return result;
}

const swapCards = (direction) => {
  const newIndex = (currentIndex + direction) % cards.slimes.length;
  setCurrentIndex(newIndex);
}

  const nextCard = () => {
    swapCards(1);
  }

  const previousCard = () => {
    swapCards(-1);
  }

  let cNum = findIndex(currentIndex);
  let pNum = findIndex(currentIndex - 1);
  let nNum = findIndex(currentIndex + 1);

  const items = [pNum,cNum,nNum];

    return (
      <div className ='carousel'>
        <div>
        <img src={headerImage}alt ='header' className='header'/>
        </div>
        {items.map((key, index)=>{
          let cardType;

          switch (index) {
            case 0: cardType = 'left';
            break;
            case 2:
              cardType = 'right';
              break;
            default:
              cardType = 'active';
          }


          return (<div
            key={key}
            className={`card card--${cardType}`}
            onClick={index === 1 ? null : index === 0 ? previousCard : nextCard}
            >
            <Card
              image={cards.slimes[key]?.picture}
              text={cards.slimes[key]?.name}
              url={index === 1 ? cards.slimes[key]?.openseaUrl : null} />
        </div>)
        })}
       <div>
          <img src={footerImage} alt='footer' className='footer'/>
        </div>
  </div>
)
}

export default Carousel;
