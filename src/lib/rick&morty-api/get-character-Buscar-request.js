import axios from "axios";

export const getBuscador= (numeroPagina) => {

    return axios (`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`, {method: 'get'});

}