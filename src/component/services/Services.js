import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Services(props) {
  const data = [
    {
      img: "https://www.islamicfinder.org/news/preview-thumbnail/post646_thumb_20211124_072050.png/646",
      type: "5x Daily Prayers",
    },
    {
      img: "https://cdn.dentonmosque.com/wp-content/uploads/2018/01/maxresdefault-1024x576.jpg",
      type: "Friday Khutbah + Prayer",
    },
    {
      img: "https://cdn.siasat.com/wp-content/uploads/2019/05/1-4-1-1.jpg",
      type: "Taraweeh Prayer with Complete",
    },
    {
      img: "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=600&h=337&q=100",
      type: "Quran Completion",
    },
    {
      img: "https://images.jazelc.com/uploads/unitedaccessllc/fundraising.png",
      type: "Fundraising",
    },
    {
      img: "https://media.premiumtimesng.com/wp-content/files/2015/12/mosque-prayer.jpg",
      type: "Eid Salat",
    },
  ];

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

  const renderCards = data.map((card, index) => (
    // <div className="col-lg" key={index}>
    <div className="card text-center border-0 w-full">
      <img
        src={card.img}
        className="card-img-top"
        alt=""
        style={{ width: "100%", height: "15vw", objectFit: "cover" }}
      />
      {/* <img src={card.img} className="card-img-top" alt="" /> */}
      <p className="text-muted lead" style={{ fontSize: "1.5em" }}>
        {card.type}
      </p>
    </div>
    // </div>
  ));

  return (
    <>
      <Carousel
        // swipeable={true}
        // draggable={true}
        // showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px px-2"
      >
        {/* <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div> */}
        {renderCards}
      </Carousel>
    </>
    // <div className="row">{renderCards}</div>

    // <section>
    //   <div class="container my-5 text-center">
    //     <div class="row gap-3">
    //       <div class="card" style={{ width: "18rem", padding: 0 }}>
    //         <img
    //           src="https://www.islamicfinder.org/news/preview-thumbnail/post646_thumb_20211124_072050.png/646"
    //           class="card-img-top"
    //           alt="..."
    //         />
    //         <div class="card-body">
    //           <p class="card-text">5x Daily Prayers</p>
    //         </div>
    //       </div>
    //       <div class="card" style={{ width: "18rem" }}>
    //         <img src="..." class="card-img-top" alt="..." />
    //         <div class="card-body">
    //           <p class="card-text">
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </p>
    //         </div>
    //       </div>
    //       <div class="card" style={{ width: "18rem" }}>
    //         <img src="..." class="card-img-top" alt="..." />
    //         <div class="card-body">
    //           <p class="card-text">
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // <div className="row text-center">
    //   <div className="col-lg border">
    //     <p>Text here</p>
    //   </div>
    //   <div className="col-lg border">
    //     <p>texh here</p>
    //   </div>
    // </div>
    // <div className="container d-flex flex-wrap justify-content-center align-items-center p-0 gap-5">
    //   <div className="box green">
    //     <div className="content">
    //       <div>
    //         <p>Five Times Congregational Salaat</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="box pink">
    //     <div className="content">
    //       <div>
    //         <p>Kids Quran, Arabic, Tajweed and Hifz Classes Daily</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="box aqua">
    //     <div className="content">
    //       <div>
    //         <p>Adult Tajweed and Hifz Classes</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="box orange">
    //     <div className="content">
    //       <div>
    //         <p>
    //           Social Services - Marriage, Birth, Death Bereavement, Arbitration
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="box purple">
    //     <div className="content">
    //       <div>
    //         <p>Youth Activities</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="box tomato">
    //     <div className="content">
    //       <div>
    //         <p>Dawah Programs</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Services;
