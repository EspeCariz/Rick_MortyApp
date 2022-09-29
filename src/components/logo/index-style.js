import styled from 'styled-components';

const LogoStyle = styled.header`

    width: 100%;
    font-family: 'Zilla Slab', serif;
    padding: 40px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:center;

    img{width:150px;}

   .logo {
    display: inline-block;
    background: linear-gradient(-45deg, #9FCAE1, #62D5D6,#6FD642, #A0E19F);
	  background-size: 400% 400%;
	  animation: degradadoEnlace 6s ease infinite;
    border-radius:50%;

            &:hover{
                box-shadow:  0 4px 8px rgba(255,255,255,0.25) ;
            }

        }
                    
              ul {
                margin: 0;
                padding: 0;
              }
              
              li {
                list-style: none;
                font-size: 25px;
                margin: 15px 0;
              }
        
        
        }
    
    






   }





`;

export default LogoStyle;