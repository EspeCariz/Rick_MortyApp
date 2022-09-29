
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";

//Styled-Components

    import PersonajesSectionStyle from "./PersonajesSection-style";

//Contenedores

    import Section from '../Section/Section';

    const PersonajesSection = ({children}) =>{

        return (

            <Section>
                <PersonajesSectionStyle>
                <div className="container">
                    <div className="row">
                        <div className="col">
                                {children}
                        </div>
                    </div>
                </div>
                </PersonajesSectionStyle>
            </Section>
        );
    };

    export default PersonajesSection;