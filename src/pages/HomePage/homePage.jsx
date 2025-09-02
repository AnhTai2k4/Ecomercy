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
      

     <SliderComponent arrImg= {["/images/slider1.webp","/images/slider2.webp","/images/slider3.webp","/images/slider4.webp","/images/slider5.webp","/images/slider6.webp",]} />   
      
      <CardComponent/>
    </div>
  );
}
