import React from "react";
import BossContainer from "../BossContainer";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import Footer from '../FooterNew';


function About() {
  return (

    <BossContainer>

      <div >
      <img src= {about1}
       width="100%" height="100%" />
       </div>
       <div >
      <img src= {about2}
       width="100%" height="100%" />
       </div>
       <div >
      <img src= {about3}
       width="100%" height="100%" />
       </div>
       <Footer>
      </Footer>
    </BossContainer>
  );
}



export default About;

