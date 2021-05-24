import axios from "axios";

class OtherServices {
  getNews = () => {
    return axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_KEY}`
      )
      .then((res) => {
        // console.log(res);
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  getStates = () => {
    return axios
      .get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
}

export default OtherServices;
