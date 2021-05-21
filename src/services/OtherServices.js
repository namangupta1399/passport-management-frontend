import axios from "axios";

class OtherServices {
  getNews = () => {
    return axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0cab3723c9b84576976a241a7d6c12d4"
      )
      .then((res) => {
        // console.log(res);
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
}

export default OtherServices;
