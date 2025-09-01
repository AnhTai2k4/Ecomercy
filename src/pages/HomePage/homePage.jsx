import "./HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/Cardcomponent";
export default function HomePage() {
  const typeProduct = [
    "Thịt, rau củ",
    "Bách hóa",
    "Nhà cửa",
    "Điện tử",
    " Thiết bị số",
    "Điện thoại",
    "Mẹ & bé",
    "Làm đẹp",
    "Gia dụng",
    "Thời trang nữ",
    "Thời trang nam",
    "Giày nữ",
    "Túi nữ",
  ];
  
  return (
    <div className="TypeProduct__block">
      <div className="TypeProduct__container">
        {typeProduct.map((type) => {
          return (
            <>
              <div class="TypeProduct__card">{type}</div>
            </>
          );
        })}
      </div>
      <br />
      <hr />

     <SliderComponent arrImg= {["public/images/slider1.webp","public/images/slider2.webp","public/images/slider3.webp","public/images/slider4.webp","public/images/slider5.webp","public/images/slider6.webp",]} />   
      
      <CardComponent/>
    </div>
  );
}
