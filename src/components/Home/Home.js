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
import Carousel from "./CustomCarousel";
import imageA from "../../assets/images/home/imageA.png";
import imageB from "../../assets/images/home/imageB.png";
import imageC from "../../assets/images/home/imageC.png";
import CustomCarousel from "./CustomCarousel";
import OtherServices from "../../services/OtherServices";
import { Component } from "react";
import howFlowChart from '../../assets/images/how.png';

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

class NewsStrip extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div  className="d-flex align-items-center" style={{background: '#fff',fontWeight: 'bold', height: '40px'}}>
        <marquee>
        {articles.length > 0 &&
          articles.map((article) => <span>{article.description}</span>)}
      </marquee>
      </div>
    );
  }
}

class Home extends Component {
  state = {
    news: [],
  };

  otherService = new OtherServices();
  componentDidMount() {
    this.otherService
      .getNews()
      .then((res) => {
        console.log(res.articles);
        this.setState({ news: [...res.articles] });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <BossContainer noPadding>
        <CustomCarousel />
      <div className="d-flex align-items-center justify-content-center flex-column pt-3 pb-5" style={{backgroundImage: 'linear-gradient(45deg, #00000090, #00000090)'}} >
          <h1 className="my-5 font-weight-bold text-white">How It Works ?</h1>
          <img src={howFlowChart} alt="" style={{width: '60%'}} />
        </div>
        <NewsStrip articles={[...this.state.news]} />
      </BossContainer>
    );
  }
}
export default Home;
