import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";

const SliderComponent = ({ arrImg }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: true,
  };
  return (
    <div>
      <div className="slider__block">
        <div className="slider__container">
          <Slider {...settings}>
            {arrImg.map((Img) => {
              return (
                <>
                  <div>
                    <img style={{ height: "300px", width: "100%" }} src={Img} />
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
