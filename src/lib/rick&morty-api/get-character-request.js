import axios from "axios";

export const getPersonajes= (numeroPagina) => {

    return axios (`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`, {method: 'get'});

}