import { Button } from "@material-ui/core";
import React from "react";
import img from "../../assets/images/page_not_found.gif";

const PageNotFound = () => {
  return (
    <>
      <img src={img} alt="page-not-found" width="100%" height="100%" />
      <Button href="/sitemap" variant="contained" style={{position: 'absolute', left: '50%', bottom: '15%', transform: 'translateX(-50%)'}}>
        Go back
      </Button>
    </>
  );
};

export default PageNotFound;
