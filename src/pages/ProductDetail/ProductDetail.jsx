import React from "react";
import "./ProductDetail.css";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const ProductDetail = () => {
  const [value, setValue] = useState(1);

  const handleDecrease = () => {
    if (value > 0) setValue(value - 1); // tránh < 0
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  return (
    <div className="product_detail__container">
      <div className="product_detail__block--1">
        <img
          src="https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/f9/ef/80/db2030d1d4f125d28b0b0bf02461b759.png.webp"
          alt="Anh san pham"
          className="img"
        />
      </div>

      <div className="block--2">
        <div className="product_detail__block--2">
          <span>
            <img
              src="https://salt.tikicdn.com/ts/upload/94/36/e7/c5297f3fad0a83fb56f98be877904467.png"
              alt=""
              style={{ height: "20px", width: "75px", marginRight: "10px" }}
            />
            <img
              src="https://salt.tikicdn.com/ts/ta/b1/3f/4e/cc3d0a2dd751a7b06dd97d868d6afa56.png"
              alt=""
              style={{ height: "20px", width: "75px" }}
            />
            <img
              src="https://salt.tikicdn.com/ts/upload/94/36/e7/c5297f3fad0a83fb56f98be877904467.png"
              alt=""
              style={{ height: "20px", width: "75px" }}
            />
          </span>

          <p>Thương hiệu: LG</p>
          <h2>Máy giặt LG AI DD Inverter 10 kg FV1410S4W1 - Hàng Chính Hãng</h2>
          <p>5.0 ⭐⭐⭐⭐⭐</p>
          <h2>7.410.000 đ</h2>
          <img
            src="https://salt.tikicdn.com/ts/upload/1c/d0/ac/e89ef64c4a607d248e9e524b69aa1d0c.png"
            alt=""
            style={{ height: "20px", width: "75px" }}
          />
          <p>Giá sau áp dụng mã khuyến mãi</p>
        </div>

        <div className="product_detail__block--2">
          <h2>Thông tin vận chuyển</h2>
          <p>Giao đến Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</p>
          <hr />
          <p>Giao Thứ Sáu</p>
          <p>Trước 19h, 05/09: 292.800₫ 342.800₫</p>
          <hr />
          <p>Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k</p>
        </div>
        <div className="product_detail__block--2">
          <h2>Ưu đãi khác</h2>
          <p>6 Mã Giảm Giá</p>
        </div>
      </div>

      <div className="product_detail__block--1">
        <span style={{ display: "flex", gap: "10px" }}>
          <img
            src="https://vcdn.tikicdn.com/cache/w100/ts/seller/d1/3f/ae/13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg.webp"
            alt="Anh san pham"
            style={{ height: "50px", width: "75px" }}
          />
          <div className="brand__container">
            <h3>Tiki Trading</h3>
            <img
              src="https://salt.tikicdn.com/cache/w100/ts/upload/6b/25/fb/c288b5bcee51f35f2df0a5f5f03de2e1.png.webp"
              alt="Anh san pham"
              style={{ height: "20px", width: "75px" }}
            />
          </div>

          <p style={{ fontSize: "14px" }}>4.7 ⭐⭐⭐⭐⭐ (5.5tr+ đánh giá)</p>
        </span>

        <hr />

        <p>Số Lượng</p>

        <InputGroup style={{ maxWidth: "200px" }} className="input__group">
          <Button
            variant="outline-secondary"
            onClick={handleDecrease}
            style={{ height: "35px", width: "40px" }}
          >
            -
          </Button>
          <Form.Control
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="text-center"
            style={{ height: "32px", width: "40px" }}
          />
          <Button
            variant="outline-secondary"
            onClick={handleIncrease}
            style={{ height: "35px", width: "40px" }}
          >
            +
          </Button>
        </InputGroup>

        <p>Tạm tính</p>
        <h2>7.410.000₫</h2>
        <button className="buy__button special">Mua ngay</button>
        <button className="buy__button">Thêm vào giỏ</button>
        <button className="buy__button">Mua trả góp sau</button>
      </div>
    </div>
  );
};

export default ProductDetail;
