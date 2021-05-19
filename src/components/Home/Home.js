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
import { Container,Grid, Button, Typography,Card, CardActions, CardContent, CardMedia, CardActionArea} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../FooterNew';

const items = [
  {
    src: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/02/04/955331-passports.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "https://static.toiimg.com/thumb/msid-80668438,width-748,height-499,resizemode=4,imgsize-102818/.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "https://data.whicdn.com/images/294293655/original.jpg",
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
  <Container className="root">
        <Grid container spacing="4">
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
              <CardMedia
                  component="img"
                  alt="Time"
                  height="300"
                  image="https://cdn0.iconfinder.com/data/icons/service-5/48/service13-256.png"
                  title="Time" />
               <CardContent>
                <Typography variant="h5">Time efficient</Typography>
                <Typography variant="subtitle1"> saves time
                </Typography>
               </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
            <CardMedia
                  component="img"
                  alt="Time"
                  height="300"
                  image="https://cdn0.iconfinder.com/data/icons/service-5/48/service27-512.png"
                  title="Time" />
              <CardContent>
              
                <Typography variant="h5">User friendly</Typography>
                <Typography variant="subtitle1"> saves time
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
            <CardMedia
                  component="img"
                  alt="Time"
                  height="300"
                  image="https://cdn0.iconfinder.com/data/icons/service-5/48/service16-256.png"
                  title="Time" />
              <CardContent>
                <Typography variant="h5">Secure</Typography>
                <Typography variant="subtitle1"> saves time
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer>
      </Footer>
 </BossContainer>
);
export default Home;
