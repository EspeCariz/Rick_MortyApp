import styled from 'styled-components';

const HeaderContainer = styled.section`
    padding: 15px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;


   
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
`;

export default HeaderContainer;