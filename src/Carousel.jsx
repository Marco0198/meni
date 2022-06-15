import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 "
            src="https://www.memijewellery.com/images/promo/29/memi_Product_CatBanners_v3Necklaces.jpg"
            alt="First slide"
          />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
