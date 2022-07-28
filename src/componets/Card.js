import React from 'react';
import './Card.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Amazing Recipes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Check Out some of the interesting Recipes'
              label='Get in the kitchen'
              path='/Recipe'
            />
            <CardItem
              src='images/img-5.jpg'
              text='keep your friends close, and your pizza closer'
              label='Delicious pizza'
              path='/Recipe'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-6.jpg'
              text='life is too short to miss out on double cheeseburgers'
              label='Burgers'
              path='/Recipe'
            />
            <CardItem
              src='images/img-7.jpg'
              text='We are so passionate about our spices that we season everything imaginable with it, its just that good'
              label='NyamaChoma'
              path='/Recipe'
            />
            <CardItem
              src='images/img-1.jpg'
              text='a delicacy that is popular among Kenyans of all ages'
              label='Mutura'
              path='/Recipe'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
