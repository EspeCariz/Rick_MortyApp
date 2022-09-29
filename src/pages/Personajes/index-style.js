import styled from 'styled-components';

const PersonajesPaginaStyle = styled.div`

    .row{
        margin-bottom: 40px;
        .col-md{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            img{filter: drop-shadow(0 10px 10px #62D5D6)}
            h1{
                font-style:italic;
                color:#6FD641;
                margin-bottom:40px;
            }
            p{
                font-size:1.5rem;
                color:#62D5D6;
            }
        }
    }

    .paginacion{
        display:inline-block;
        border-radius: 20px 0;
        padding:10px 30px;
        background:#191c29;
        box-shadow: 0 14px 18px #000;
        border: 3px solid #62D5D6;
        font-size:2.5rem;
        color:#62D5D6;
        margin:10px 30px;

        &:hover{
            color:white;
            
            background:#5628F0;
        }

    }


    .hero-wrapper{
        text-align: center;
        color: white;
        img{
            width: 350px;
            display: inline-block;
            margin-bottom: 15px;
            margin-top: 15px;
        }
    }
`;

export default PersonajesPaginaStyle;
