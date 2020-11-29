import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image1 from '../images/DSC_4914.jpg';
import image2 from '../images/DSC_4915.jpg';
import image3 from '../images/DSC_4916.jpg';
import image4 from '../images/DSC_4917.jpg';
import image5 from '../images/DSC_4918.jpg';
import image7 from '../images/DSC_4921.jpg';
import image8 from '../images/DSC_4922.jpg';   
import image9 from '../images/DSC_4923.jpg'; 
import image10 from '../images/DSC_4924.jpg'; 
import image11 from '../images/DSC_4925.jpg'; 
import image12 from '../images/DSC_4940.jpg';  
import image13 from '../images/DSC_4942.jpg'; 
import image14 from '../images/DSC_4943.jpg'; 
import image15 from '../images/DSC_4944.jpg'; 
import image16 from '../images/DSC_4946.jpg'; 
import image17 from '../images/DSC_4947.jpg'; 

function Space() {
  return (
    <div className='cards' name='Home'>
      <h1>Espaço</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image2}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image3}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image4}
              label='POALAB @2020'
              path='/Space'
            />
          </ul>
          <ul className='cards__items'>  
            <CardItem
              src={image5}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image7}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image8}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image9}
              label='POALAB @2020'
              path='/Space'
            />
          </ul>
          <ul className='cards__items'>  
            <CardItem
              src={image10}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image11}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image12}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image13}
              label='POALAB @2020'
              path='/Space'
            />
          </ul>
          <ul className='cards__items'>  
            <CardItem
              src={image14}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image15}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image16}
              label='POALAB @2020'
              path='/Space'
            />
            <CardItem
              src={image17}
              label='POALAB @2020'
              path='/Space'
            />
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Space;
