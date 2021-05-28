import axios from "axios";

class OtherServices {
  getNews = () => {
    return axios
      .get(
        `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_NEWS_KEY}&languages=en&keywords=covid`
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
