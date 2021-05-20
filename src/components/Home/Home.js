import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import BossContainer from "../BossContainer";
import {
  Container,
  Grid,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import Footer from "../FooterNew";
import Carousel from "./CustomCarousel";
import imageA from "../../assets/images/home/imageA.png";
import imageB from "../../assets/images/home/imageB.png";
import imageC from "../../assets/images/home/imageC.png";
import CustomCarousel from "./CustomCarousel";

const items = [
  {
    src: imageA,
    header: "",
    key: "1",
  },
  {
    src: imageB,
    header: "",
    key: "2",
  },
  {
    src: imageC,
    header: "",
    key: "3",
  },
];
const Home = () => (
  <BossContainer>
    <CustomCarousel />

    {/* <Container className="root">
      <Grid container spacing="4">
        <Grid item xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Time"
                height="300"
                image="https://cdn0.iconfinder.com/data/icons/service-5/48/service13-256.png"
                title="Time"
              />
              <CardContent>
                <Typography variant="h5">Time efficient</Typography>
                <Typography variant="subtitle1"> saves time</Typography>
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
              title="Time"
            />
            <CardContent>
              <Typography variant="h5">User friendly</Typography>
              <Typography variant="subtitle1"> saves time</Typography>
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
              title="Time"
            />
            <CardContent>
              <Typography variant="h5">Secure</Typography>
              <Typography variant="subtitle1"> saves time</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container> */}
    <Footer />
  </BossContainer>
);
export default Home;
