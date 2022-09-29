import React from "react";
import { Link } from "react-router-dom";

//Style-Components

    import FooterContainer from "./Footer-style";

    //Componentes

        import LogoApp from "../../components/logo";

        import divisor from '../../assets/brand/divisor.png';


    //Assets

const Footer = () => {
    return(

        <FooterContainer>
            <img src={divisor} alt="" className="w-100 divisor" />

            <div className="footer w-100">
                <LogoApp />

                <div className="autor text-center">
                   <p> Diseño y desarrollo web por <br className="d-block d-md-none" /><a href="https://esperanzacariz.com/">Esperanza Cariz</a></p>
                </div>
            </div>

        </FooterContainer>

    );
};

export default Footer;