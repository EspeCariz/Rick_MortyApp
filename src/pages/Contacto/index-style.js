import styled from 'styled-components';

const ContactoContainer = styled.div`

    color:white;

    #contacto{

        margin: 50px 0;
        h3{span{color:#6FD642;}}
        h1{color:#6FD642;}

        a, .enviar {
            display:inline-block;
            margin:20px 0;
            padding: 20px 60px;
            color:white;
            font-weight:700;
            letter-spacing:0.1rem;
            background-color:#6FD642;
            border-radius:40px;
        }
    }
    
    .form-wrapper{
        margin: 40px 20px;
        display: flex;
        justify-content:center;
        flex-direction: column;

        input,textarea{background:none;border:none;border-bottom:3px solid #a0e19f;}

        input,textarea,span{margin:10px 0;padding: 10px;}

        input::placeholder, textarea::placeholder{color:#a0e19f; font-size:1.5rem;}
        
        span{display:block; padding: 10px 30px;}

    }
`;

export default ContactoContainer;