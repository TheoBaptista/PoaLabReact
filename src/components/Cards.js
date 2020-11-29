import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image1 from '../images/bancada.png';
import image2 from '../images/wanhao.png';
import image3 from '../images/printrbot.png';
import image4 from '../images/cma6040.png';
import image5 from '../images/plottersaga.png';
import image6 from '../images/fresa1.png';
import image7 from '../images/filabot.png';
import image8 from '../images/plotterhp.png';


function Cards() {
  return (
    <div className='cards' name='Home'>
      <h1>Equipamentos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='Osciloscópio, 
							fonte de bancada, 
							estação de solda, 
							componentes eletrônicos diversos.'
              label='Bancada de Eletrônica'
              path='/Cards'
            />
            <CardItem
              src={image2}
              text='2 extrusores,
							filamento 1.75mm, 
							camada entre 0.1 e 0.5mm, 
							área: 225mm x 145mm x 150mm, 
							base aquecida.'
              label='2 Impressoras 3D Wanhao Duplicator 4'
              path='/Cards'
            />
            <CardItem
              src={image3}
              text='Filamento de 1.75mm,
							resolução de camada entre 0.1 e 0.5mm
							área de trabalho: 152mm x 152mm x 152mm.'
              label='Mys Impressora 3D printrbot simple metal'
              path='/Cards'
            />
            <CardItem
              src={image4}
              text='Área de corte de 60cm x 40cm, 
							potência do laser: 70-80W<br, 
							Espessura do corte: 0-25mm para acrílico, 
							Precisão < 0.01mm.'
              label='1 Cortadora Laser CMA6040'
              path='/Cards'
            />
          </ul>
          <ul className='cards__items'>  
            <CardItem
              src={image5}
              text='Largura máxima da mídia: 72cm,  
							largura máxima de corte: 62cm,  
							laser point, 
							velocidade: 600mm/s, 
							precisão de repetição: 0.082mm.'
              label='1 Plotter de Recorte SAGA 720i'
              path='/Cards'
            />
            <CardItem
              src={image6}
              text='Área: 200mm x 250mm, 
							eixo z: 150mm, 
							refrigeração do motor a ar, 
							velocidade de rotação programável.'
              label='1 Fresadora MTC-200×250(não operacional)'
              path='/Cards'
            />
            <CardItem
              src={image7}
              text='Bico de extrusão de 1.75mm,
							adequado para ABS e PLA, 
							taxa de extrusão entre 13 e 51 cm/minuto'
              label='1 Extrusora de filamento modelo filabot wee'
              path='/Cards'
            />
            <CardItem
              src={image8}
              text='Alimentação por rolo ou folha,
							largura de impressão: 61cm, 
							espessura: até 11.8 milésimos de polegada, 
							resolução de impressão: 2400 x 1200 dpi.'
              label='1 Plotter de Impressão HP T520(não operacional)'
              path='/Cards'
            />
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Cards;
