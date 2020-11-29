import React from 'react';
import './LinksSection.css';
import image1 from '../images/braille.png';
import image2 from "../images/thingiverse.png";
import image3 from "../images/InstructablesRobot.png";
import image4 from "../images/opendesk.png";
import image5 from "../images/fabfoundation.png";
import image6 from "../images/fabcity.png";
import image7 from "../images/tinkercad.png";
import image8 from "../images/inkscape.png";
import image10 from "../images/makercase.png";
import image11 from "../images/rbac.png";
import image12 from "../images/makepoa.png";
import image13 from "../images/logo (1).svg";
import image14 from "../images/fabacademy.png";
import image15 from "../images/make.png";

function LinksSection() {
    return (
        <div className='LinksSection'>
            <div className='titulo' >
                <h1>Links úteis</h1>
            </div>
            <div className='links'>
                <div className="row" >
                    <div  className="column" >                             
                        <a href="https://cta-ifrs.github.io/Text2Braille3d/" target="https://cta-ifrs.github.io/Text2Braille3d/">                 
                            <img title="Braille" alt="Braille" width="100" src={image1} />
                        </a>
                    </div>    
                <div className="column">
                    <a href="https://www.thingiverse.com/" target="https://www.thingiverse.com/"> 
				        <img title="Thingiverse" alt="Thingiverse" width="110" src={image2}/>
			        </a>
                </div> 
                <div className="column">
                    <a href="https://www.instructables.com/" target="https://www.instructables.com/"> 
				        <img title="instructables" alt="instructables" width="60" src={image3}/>
			        </a>
                </div> 
                <div className="column">
                    <a href="https://www.opendesk.cc/" target="https://www.opendesk.cc/"> 
				        <img title="Opendesk" alt="Opendesk" width="150" src={image4}/>
			        </a>
                </div> 
                <div className="column">
                    <a href="http://fabacademy.org/" target="http://fabacademy.org/"> 
				        <img title="Fab Academy" alt="Fab Academy" width="150" src={image14}/>
			        </a>
                </div> 
                <div className="column">
                    <a href="http://www.fabfoundation.org/" target="http://www.fabfoundation.org/"> 
				        <img title="Fab Foundation" alt="Fab Foundation" width="170" src={image5}/>
			        </a>
                </div> 
                <div className="column">
                    <a href="https://fab.city/" target="https://fab.city/"> 
				        <img title="Fab City" alt="Fab City" width="90" src={image6}/>
			        </a>
                </div> 
            </div >
            <div className="row">
                <div className="column">
                    <a href="https://makezine.com/" target="https://makezine.com/"> 
				        <img title="makezine" alt="makezine" width="80" src={image15}/>
			        </a>
                </div> 
                <div>
                    <a href="https://www.tinkercad.com/" target="https://www.tinkercad.com/"> 
				        <img title="tinkercad" alt="tinkercad" width="60" src={image7}/>
			        </a>
                </div>
                <div className="column">
                    <a href="https://inkscape.org/pt-br/" target="https://inkscape.org/pt-br/"> 
			            <img title="inkscape" alt="inkscape" width="60" src={image8}/>
			        </a>
                </div> 
                <div className="column">   
                    <a href="http://www.makercase.com/" target="http://www.makercase.com/"> 
			            <img title="makercase" alt="makercase" width="60" src={image10}/>
			        </a>
                </div> 
            <div className="column">
                <a href="http://aprendizagemcriativa.org/" target="http://aprendizagemcriativa.org/"> 
                    <img title="RBAC" alt="rede brasileira de aprendizagem criativa" width="150" src={image11}/>
                </a>
            </div> 
            <div className="column">
                <a href="https://portoalegre.makerfaire.com/" target="https://portoalegre.makerfaire.com/"> 
			        <img title="maker faire porto alegre" alt="maker faire porto alegre" width="120" src={image12}/>
			    </a>
            </div>      
            <div className="column">
                <a href="https://www.poalab.net.br/fabbernatives/" target="https://www.poalab.net.br/fabbernatives/"> 
                    <img title="Braille" alt="Braille" width="80" src={image13}/>
                </a>
            </div> 
        </div>
        </div>
    </div>
    );
}

export default LinksSection;