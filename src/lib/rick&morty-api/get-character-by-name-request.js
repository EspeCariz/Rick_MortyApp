import axios from "axios";

export const getNombrePersonajes= (name) => {

    return axios (`https://rickandmortyapi.com/api/character${name}`, {method: 'get'});

}