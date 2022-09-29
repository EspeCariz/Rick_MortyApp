import styled from 'styled-components';

const FooterContainer = styled.section`

    margin-top:50px;


    font-family: 'Zilla Slab', serif;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    img.divisor{filter: drop-shadow(0px -50px 73px rgba(98,213,214,0.3))}

    .footer{
        margin-top:-10px;
        background:linear-gradient(180deg, #14104F 0%, #0D0C17 100%);
        z-index:1;

        .autor{
            padding: 40px 0;
            color:white;
            font-size:1.2rem;
            letter-spacing:0.2rem;
            font-weight:700;
            
            p{
                display:inline-block;
                border-bottom: 3px solid #62d5d6;
                padding:20px;
                a{
                    font-style:italic;
                    color:#62d5d6;
                    text-decoration:none;

                    &:hover{
                        text-decoration: 2px underline #A0E19F;
                    }
                }
            }
        }

        nav{
            a, link{
                padding:15px;
                margin: 15px;
                text-decoration: none;
                color:white;
                font-weight:600;
                letter-spacing:0.25em;
                text-transform:uppercase;
    
                &:hover{
                    color:#62d5d6;
                    background: rgba(5, 20, 78, 0.5);
                    box-shadow: 0 10px 10px #62d5d6;
                    border-bottom: 3px solid #62d5d6;
                }
    
            }   
        }
    }

   
   
`;

export default FooterContainer;