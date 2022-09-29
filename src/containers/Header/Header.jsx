import React from "react";
import { Link } from "react-router-dom";

//Style-Components

    import HeaderContainer from "./Header-style";

    //Componentes

        import LogoApp from "../../components/logo";

    //Assets

const Header = () => {
    return(

        <HeaderContainer>
            
            <LogoApp />

        </HeaderContainer>

    );
};

export default Header;