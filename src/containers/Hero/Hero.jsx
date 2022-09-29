import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

//Style-Component

    import HeroSectionContainer from "./Hero-style";

const HeroSection = ({children}) => {

    return(
       <HeroSectionContainer>
           <div className="container">
               <div className="row">
                   <div className="col">
                        {children}
                   </div>
               </div>
           </div>
       </HeroSectionContainer>
    )

};

export default HeroSection;