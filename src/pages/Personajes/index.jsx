   
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, {useState, useEffect, useRef} from 'react';

//Styled-components
    import PersonajesPaginaStyle from './index-style';

//Assets

import HeroPersonajes from '../../assets/HeroPersonajes.png';

//Containers

    import Header from '../../containers/Header/Header';
    import HeroSection from '../../containers/Hero/Hero';
    import PersonajesSection from '../../containers/Personajes/PersonajesSection';
    import Footer from "../../containers/Footer/Footer";
    
//Componentes
    
    import CharacterCard from '../../components/character-card';
    import Buscador from '../../components/buscador';
    import Paginacion from '../../components/paginacion';


//Request / Peticiones a la API

    import { getPersonajes } from '../../lib/rick&morty-api/get-character-request';
    import { getBuscador } from "../../lib/rick&morty-api/get-character-Buscar-request";

const PersonajesPagina = () => {

    const [personajesList, setPersonajesList] = useState([]);
    const [filtrado, setfiltrado] = useState([]);

    //Buscador

    let [numeroPagina, updateNumeroPagina] = useState(1);
    const [buscarOpciones, setBuscarOpciones] = useState("");

    const buscador = useRef(null);

    function buscar() {
        
        const resultado= buscador.current.value;
        const filtrado = personajesList.filter(personaje=>personaje.name.toLowerCase().includes(resultado));
        setfiltrado(filtrado);
    }

    //paginacion

    // useEffect(()=>{

    //     const getBuscadorRequest = async() =>{
    //     const busquedaResult = await getBuscador(numeroPagina);
    //     const buscar = await busquedaResult.data;
    //     setBuscarOpciones(buscar.results);
    //     }
        
    //     getBuscadorRequest();

    // },[])

    const paginacion = async () => {
        const personajesResult = await getPersonajes(numeroPagina);
        const personajes = await personajesResult.data;
        setPersonajesList(personajes.results);
        setfiltrado(personajes.results);
    }

    const siguiente = () => {
        if (numeroPagina <= 42) {
            numeroPagina++;
            updateNumeroPagina(numeroPagina);
            paginacion();
            console.log(numeroPagina);
        }
    }

    const prev = () => {
        if (numeroPagina >= 0) {
            numeroPagina--;
            updateNumeroPagina(numeroPagina);
            paginacion();
            console.log(numeroPagina);
        }
    }

    //filtrado + Personajes

    useEffect(() => {
    
        const getPersonajesRequest = async() =>{
            const personajesResult = await getPersonajes(numeroPagina);
            const personajes = await personajesResult.data;
            setPersonajesList(personajes.results);
            setfiltrado(personajes.results);
            }
            getPersonajesRequest();

    }, []);

    return (
        <PersonajesPaginaStyle>
            <Header />
            <HeroSection>
                <div className="container">
                    <div className="row">
                    <div className="col-10 col-md">
                        <h1 className="display-3 fw-bold">Nuestros tripulantes van a la deriva</h1>
                        <p>Existen muchos tripulantes en nuestra serie, y todos ellos dispersados por el espacio.Tienes varios modos de encontrarlos:<br/><br/> 1.tiliza el buscador de la Enterprise, puede localizar a casi cualquiera, solo te hace falta su nombre.<br/><br/>2. Surca la API, localizando a cada pequeño ser, vivo o muerto</p>
                    </div>
                        <div className="col-10 col-md">
                            <img src={HeroPersonajes} className="w-100" alt="" />
                        </div>
                        
                    </div>
                </div>
            </HeroSection>
            <h2 className="text-center text-white mb-4">¿Buscas algún personaje?</h2>
            <Buscador referencia={buscador} handleChange={() => {
                buscar();
            }} />
            <PersonajesSection>
                {
                    filtrado.map((personajes, index)=>(
                        <CharacterCard id={personajes.id} image={personajes.image} name={personajes.name} status={personajes.status} location={personajes.location} gender={personajes.gender} species={personajes.species} />
                    ))
                }
            </PersonajesSection>

            {/* <Paginacion info={numeroPagina} numeroPagina={numeroPagina} updateNumeroPagina={updateNumeroPagina} /> */}

                <div className="container">
                    <div className="row">
                        <div className="col text-center">

                        <span onClick={() => prev()} className='paginacion'>☜ ·</span>

                        <span onClick={() => siguiente()} className='paginacion'>· ☞</span>

                        </div>
                    </div>
                </div>

            <div>
                
            </div>
            <Footer />


        </PersonajesPaginaStyle>
    );
};

export default PersonajesPagina;
