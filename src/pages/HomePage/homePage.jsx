import "./HomePage.css"

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
              <div class = "TypeProduct__card">{type}</div>
            </>
          );
        })}
      </div>
      <br/>
      <hr/>
    </div>
  );
}
