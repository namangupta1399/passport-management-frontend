import React from "react";
import BossContainer from "../BossContainer";
import CustomCarousel from "./CustomCarousel";
import OtherServices from "../../services/OtherServices";
import { Component } from "react";
import howFlowChart from "../../assets/images/how.png";
import newImage from "../../assets/images/new-gif-image-6.gif";
import "./HomeStyle.css";

class NewsStrip extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div
        className="d-flex align-items-center marquee"
        style={{ background: "#fff", fontWeight: "bold", height: "40px" }}
      >
        <p>
          {articles.length > 0 &&
            articles.map((article, index) => (
              <span key={index}>
                <img src={newImage} alt={article.author} width="60" />
                <span>{article.title}</span>
              </span>
            ))}
        </p>
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
        this.setState({ news: [...res.data] });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <BossContainer noPadding>
        <CustomCarousel />
        <div
          className="d-flex align-items-center justify-content-center flex-column pt-3 pb-5"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #00000090, #00000090), url("https://image.freepik.com/free-vector/lot-black-international-travel-visa-rubber-stamps-imprints-old-paper-horizontal-vintage-background_88653-646.jpg")',
          }}
        >
          <h1 className="my-5 font-weight-bold text-white">How It Works ?</h1>
          <img src={howFlowChart} alt="" style={{ width: "60%" }} />
        </div>
        <NewsStrip articles={[...this.state.news]} />
      </BossContainer>
    );
  }
}
export default Home;
