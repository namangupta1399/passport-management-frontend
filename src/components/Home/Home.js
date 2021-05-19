// import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";
// import BossContainer from "../BossContainer";

// class Home extends Component {
//   render() {
//     return (
//       <BossContainer>
//         <h1 style={{textAlign: 'center'}}>Welcome to PassportPalace</h1>
//       </BossContainer>
//     );
//   }
// }
// export default Home;
import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import BossContainer from "../BossContainer";

const items = [
  {
    src: "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-5.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-5.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-5.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Home = () => (
 <BossContainer>
  <Row>
    <Col md="12" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
 </BossContainer>
);
export default Home;