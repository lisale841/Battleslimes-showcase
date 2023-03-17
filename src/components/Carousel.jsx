import React, {useState} from 'react';
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


    return (
      <div className ='carousel'>
        <div>
        <img src={headerImage}alt ='header' className='header'/>
        </div>
        <div
        className ='card card--active'>
          <Card
          image={cards.slimes[cNum]?.picture}
          text ={cards.slimes[cNum]?.name}
          url ={cards.slimes[cNum]?.openseaUrl}/>
        </div>

        <div onClick={previousCard}
        className='card card--left'>
          <Card
            image={cards.slimes[pNum]?.picture}
            text={cards.slimes[pNum]?.name}
            // url={cards.slimes[pNum]?.openseaUrl}
            />
       </div>

        <div onClick={nextCard}
        className='card card--right'>
          <Card
            image={cards.slimes[nNum]?.picture}
            text={cards.slimes[nNum]?.name}
            // url={cards.slimes[nNum]?.openseaUrl}
            />
        </div>
       <div>
          <img src={footerImage} alt='footer' className='footer'/>
        </div>
  </div>
)
}

export default Carousel;
