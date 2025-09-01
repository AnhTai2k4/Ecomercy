import "./HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/Cardcomponent";
export default function HomePage() {
  
  return (
    <div className="TypeProduct__block">
      

     <SliderComponent arrImg= {["public/images/slider1.webp","public/images/slider2.webp","public/images/slider3.webp","public/images/slider4.webp","public/images/slider5.webp","public/images/slider6.webp",]} />   
      
      <CardComponent/>
    </div>
  );
}
