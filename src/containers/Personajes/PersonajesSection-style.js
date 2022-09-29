import styled from "styled-components";

const PersonajesSectionStyle = styled.div`

    width:100%;

    .container{
        .row{
            .col{
                width:100%;
                display:flex;
                flex-wrap:wrap;
            }
        }
    }

    li{
        flex:1 1 100px;
        margin:10px;
        img{
            width:100%;
        }
    }

`;

export default PersonajesSectionStyle;