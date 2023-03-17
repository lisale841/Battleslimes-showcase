import React, { useState } from 'react';
import { slimeData } from '../data/slimeData';
import MobileCard from './MobileCard';
import './Carousel.css';
import headerImage from './battleslimelogo.png';
import footerImage from './slimes.png'

const MobileCarousel = () => {
  const cards = slimeData;
  console.log(cards);
  console.log('cards', cards);

  const [currentIndex, setCurrentIndex] = useState(0);

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
  // let pNum = findIndex(currentIndex - 1);
  // let nNum = findIndex(currentIndex + 1);


  return (
    <div className='carousel'>
      <div className='mobile--header'>
        <img src={headerImage} alt='header' className= 'mobile--header'/>
      </div>
      <div className= 'position'>

      <div onClick={previousCard}
      className= 'arrow'>
        <i class="fas fa-chevron-left"></i>
      </div>

      <div
        className='mobile--card'>
        <MobileCard
          image={cards.slimes[cNum]?.picture}
          text={cards.slimes[cNum]?.name}
          url={cards.slimes[cNum]?.openseaUrl} />
      </div>
      <div onClick={nextCard}
      className = 'arrow'>
        <i class="fas fa-chevron-right"></i>
      </div>
      </div>
      <div className='header'>
        <img src={footerImage} alt='footer' className='footer' />
      </div>
    </div>
  )
}

export default MobileCarousel;
