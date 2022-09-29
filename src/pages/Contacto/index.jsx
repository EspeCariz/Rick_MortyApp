import React, { useState } from 'react';

//Styled-components
import ContactoContainer from './index-style';

//Assets
    
    import FooterImage from '../../assets/FooterImage.png';

//Containers

    import Header from '../../containers/Header/Header';
    import HeroSection from '../../containers/Hero/Hero';
    import Section from '../../containers/Section/Section';
    import Footer from '../../containers/Footer/Footer';

    import { Link } from 'react-router-dom';

const Contacto = () => {
    
    const [formValues, setFormValues] = useState({});

    const handleFormValue = (e) => {

    }

    return (
    
    <ContactoContainer>
        
        <Header />
        <HeroSection>
                <div id="contacto" className="container-fluid text-center">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-10 col-lg-6">
                            <img src={FooterImage} className="w-100" alt="" />
                            <h1 className="display-3 fw-bold">El Rick Original</h1>
                            <p className="fs-4">Te felicita por hacerlo encontrado<br/>¿Quieres ver más como él?</p>

                            <Link to="/personajes">¿Más?</Link>
                        </div>
                        <div className="col-10 col-lg-6">
                            <h3 className="display-5">Date una vuelta por nuestro <span className="fw-bold">Multi~verso</span></h3>
                            <p>Tras desvelar los secretos mejor guardados de <u>Rick & Morty</u>¿¿crees que podremos descubrir más??Mandanos un mensaje con  nuesto formulario</p>

                            <div className="formulario ">
                                <form action="" className='form-wrapper'>
                                        <input 
                                            type="text" 
                                            name="nombre" 
                                            placeholder='Nombre y apellidos'
                                            onBlur={(e) => handleFormValue(e) }
                                        />
                                        <input 
                                            type="text" 
                                            name="ubicacion" 
                                            placeholder='Planeta de Residencia'
                                            onBlur={(e) => handleFormValue(e) }
                                        />
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder='Email'
                                            onBlur={(e) => handleFormValue(e) }
                                            />
                                        <textarea 
                                            name="mensaje" 
                                            cols="30" rows="10" 
                                            placeholder='Mensaje'
                                            onBlur={(e) => handleFormValue(e) }
                                            ></textarea>
                                        <span className="enviar">Enviar</span>
                                    </form>
                                </div>

                        </div>
                    </div>
                </div>
            </HeroSection>
            <Section>
               
            </Section>
        <Footer />
         
    </ContactoContainer>
  );
}

export default Contacto;
