import styled from 'styled-components';

const CharacterCardContainer = styled.li`
    width: 100%;
    max-width: 350px;

    .tarjeta {
        padding:20px;
        text-align:center;
        color:#62d5d6;
        border: 5px solid #33cce9;
        border-radius: 20px 0;
        background: #191c29;
        margin: 20px 5px;
       
        .content {padding: 10px;}
        .serie{padding:5px;box-shadow: inset -1px 1px 10px 1px #62d5d6;border-radius:20px; margin-right: 5px;}
        p span {display:inline-block; margin:0 5px;}
        .img {
            margin-top:-60px;
            border: 5px solid #33cce9;
            border-radius: 20px 0;
        }

        .status{border: 3px solid #33cce9;border-top:0;padding: 20px 4px 10px 4px;margin-top:-15px;font-weight:700;color:;}
        
        .ubicacion{
            div.fs-6{
            
                display:flex;
                justify-content:center;
                align-items:center;
                
                img {width:30%; margin-right:10px;}
        
                p{display:inline-block; padding-top:20px;}
               
            }
        }



}
        
    

    


`;

export default CharacterCardContainer;