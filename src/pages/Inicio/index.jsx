import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

//Styled-components
import InicioContainer from './index-style';

//Assets
    
    import BannerMain from '../../assets/BannerMain.png';
    import Sinopsis from '../../assets/Sinopsis.png';

//Containers

    import Header from '../../containers/Header/Header';
    import HeroSection from '../../containers/Hero/Hero';
    import Section from '../../containers/Section/Section';
    import Footer from '../../containers/Footer/Footer';
    import { Link } from 'react-router-dom';

const Inicio = () => {

  return (
    
    <InicioContainer>
        
        <Header />
        <HeroSection>
                <div id="presentacion" className="container">
                    <div className="row">
                    <div className="col-10 col-md"><h1 className="display-2 fw-bold my-4 ">Bienvenido a <wbr/>Rick & Morty</h1>
                        <p>Bienvenido a al multiverso de Rick & Morty, lo descubriras gracias a una API pública de la que se sustraen los datos mediante peticiones.Podrás saber que personajes siguen vivos, muertos,desaparecidos o incluso de que raza son.<br/> ¿A que estas esperando?</p>
                        </div>
                        <div className="col-10 col-md">
                        <img src={BannerMain} className="w-100 BannerMain mb-4" alt="" />
                        </div>
                        
                    </div>
                </div>
        </HeroSection>
        <Section>
            <div className="info">
                <div className="container">
                    <div className="row">
                    <div className="col-10 col-md-4 my-2">
                            <div className="card">
                            <img src={Sinopsis} className="w-100 BannerMain mb-4" alt="" />
                                <h4 className="display-6 fw-bold text-center">Los Prota<span className="d-none d-lg-inline">gonista</span>s</h4>
                            </div>
                        </div>
                        <div className="col-10 col-md-8 my-2">
                            
                            <div className="card">
                                <h3 className="display-5 fw-bold ">Sinopsis</h3>
                                <p>Rick Sánchez es la definición exacta de "científico loco". Es alcohólico, es un genio, es irresponsable y está loco. Rick acaba de mudarse a casa de su hija Beth y allí recuerda que tiene un nieto llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que le acompañe a todo tipo de aventuras para que el chico se vuelva inteligente como él y no se convierta en un idiota como Jerry, padre de Morty y yerno de Rick. </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Section>
        <Footer />
         
    </InicioContainer>
  );
}

export default Inicio;
