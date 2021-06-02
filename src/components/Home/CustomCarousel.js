import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import imageA from "../../assets/images/home/imageA.png";
import imageB from "../../assets/images/home/imageB.png";
import imageC from "../../assets/images/home/imageC.png";

const items = [
  {
    src: imageA,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: imageB,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: imageC,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const CustomCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ width: "100%" }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const heading = {
    color: "#fff",
    position: "absolute",
    left: "150px",
    top: "200px",
    fontSize: "2rem",
    lineSpacing: "10px",
  };

  return (
    <div style={{ boxShadow: "0 2px 2px 0px #fff", zIndex: 9 }}>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div style={heading}>
        <h1
          style={{
            fontFamily: "Arial",
            fontWeight: "900",
            fontSize: "3.5rem",
            lineHeight: "1.4",
          }}
        >
          WELCOME to
          <br />
          HOUSE OF PASSPORTS
        </h1>
        <p>Covid won't last forever, so keep your passports ready!</p>
      </div>
    </div>
  );
};

export default CustomCarousel;
