import React from "react";
import Title from "../../component/title/Title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { currentServices } from "../../data/data";

function CurrentServices(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 50,
    },
  };

  const renderCards = currentServices.map((card, index) => (
    <div className="card text-center w-full position-relative" key={index}>
      <img
        src={card.img}
        className="card-img-top"
        alt=""
        style={{ width: "100%", height: "15vw", objectFit: "cover" }}
      />
      <p className="text-muted lead">{card.type}</p>
    </div>
  ));

  return (
    <div id="services">
      <Title title="Our Service" />

      <Carousel
        // swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        itemClass="carousel-item-padding-40-px px-2"
      >
        {renderCards}
      </Carousel>
    </div>
  );
}

export default CurrentServices;
