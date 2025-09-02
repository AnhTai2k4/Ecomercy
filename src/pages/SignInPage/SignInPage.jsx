import React from "react";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signin__container">
      <div className="signin__card">
        <div className="signin__item--1">
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>

          <input className="input__form"  type="email" placeholder="abc@gmail.com" />
          <br/>
          <input className="input__form" type="password" placeholder="password" />
          
          <button className="button__form">Đăng nhập</button>
          <br/>
          <a className="a__item" href="">Quên mật khẩu</a>
          <span className="span__item" style={{display:"flex"}}>
            Chưa có tài khoản? 
            <a className="a__item" href="/sign-up">Tạo tài khoản</a>
          </span>
        </div>
        <div className="signin__item--2">
          <img
            src="https://salt.tikicdn.com/ts/upload/df/48/21/b4d225f471fe06887284e1341751b36e.png"
            alt=""
            className="signin__img"
          />
          <h3>Mua sắm tại Tiki</h3>
          <p style={{ margin: "0px" }}>Siêu ưu đãi mỗi ngày</p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
