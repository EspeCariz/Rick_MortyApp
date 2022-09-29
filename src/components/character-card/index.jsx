import React from "react";
import { Link } from "react-router-dom";
import CharacterCardContainer from "./index-style";

import ubicacion from "../../assets/brand/ubicacion.png";



const CharacterCard = ({id, image, name, status, gender,location, species }) => {
    return (
        
        <CharacterCardContainer className="tarjeta">

            <div className="tarjeta d-flex flex-column justify-content-center" >
                    <img className="img img-fluid" src={image} alt="" />
                    <div className="status fs-6">{species}</div>
                <div className="content">
                    <div className="fw-bold serie">#0{id}</div>
                    <div className="fs-5 fw-bold my-2">{name}</div>
                    <div className="ubicacion">
                        <div className="fs-6"><p>{gender} <span>|</span> {status} </p></div>
                        <div className="fs-6"><img src={ubicacion} alt="" /><p>Ubicación:</p></div>
                        <div className="fs-6">{location.name}</div>
                    </div>
                </div>
                
            </div>



        </CharacterCardContainer>
    );
};

export default CharacterCard;

