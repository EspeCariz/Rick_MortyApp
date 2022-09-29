import React from "react";
import BuscadorContainer from "./index-style";



const Buscador = ({ handleChange, referencia }) => {
    
    let buscarBtn = (e) => {
      e.preventDefault();
    };

    return (
        
        <BuscadorContainer className="">

            <form className="search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5" >
                
                <input onChange={() =>  
                        handleChange()
                    } ref={referencia} placeholder="Buscar personajes" className="input" type="text"/>

                <button onClick={buscarBtn} className="btn btn btn-primary fs-5" >Buscar</button>
            </form>


        </BuscadorContainer>
    );
};

export default Buscador;
