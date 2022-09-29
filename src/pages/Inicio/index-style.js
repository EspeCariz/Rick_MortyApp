import styled from 'styled-components';

const InicioContainer = styled.div`


        #presentacion{

            .row{
                display: flex;
            align-items: center;
            justify-content: center;

            h1{
                font-style:italic;
                color:#a0e19f;
                margin-bottom:40px;
            }
            p{
                font-size:1.15rem;
                color:#62D5D6;
            }
    
            .BannerMain{
                    filter: drop-shadow(0 8px 8px #62D5D6);
                }
            }


        }

        
.info{
    padding:60px 0 ;
        .row{
        display: flex;
        justify-content:center;
        align-items:center;
        margin:40px 20px;

        .card{
            background:#14101c;
            border-radius: 40px 0;
            padding:20px 40px;
            h3,h4{
                font-style:italic;
                color:#a0e19f;
                margin-bottom:40px;
            }
            p{
                font-size:1.15rem;
                color:#62D5D6;
            }
        }
        }
    }
`;

export default InicioContainer;