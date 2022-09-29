import React from "react";
import { Link } from "react-router-dom";
import LogoStyle from "./index-style";

//Assets 

    import Logo from '../../assets/brand/LogoFinal.png';

const LogoApp = () => {
    return (
        <LogoStyle>
            
           <div className="container">
               <div className="row">
                   <div className="col">
                   <div className="w-100 d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center text-center">

                        <Link to="/">
                            <img className="logo" src={Logo} alt="Logotipo de App Rick y Morty.Presionar si desea volver al inicio" />
                        </Link>


                                <nav id="navigation" class="navigation mt-5 d-flex justify-content-center flex-wrap">
                                            <Link to="/">Inicio</Link>
                                            <Link to="/personajes">Personajes</Link>
                                            <Link to="/contacto">Contacto</Link>
                                </nav>
                                
                        </div>
                   </div>
               </div>
           </div>
                        
        </LogoStyle>
    );
};

export default LogoApp;

