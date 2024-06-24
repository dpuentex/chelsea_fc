import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Shop.css";

function ShopNav({ handleSelectionChange }) {
  return (
    <div className="ShopHeaderDiv">
      <nav className="shopNav">
        <li
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("ShopHome")}
        >
          HOME
        </li>
        <li
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("Jersey")}
        >
          JERSEYS
        </li>
        <li
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("Training")}
        >
          TRANING
        </li>
        <li
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("Cart")}
        >
          CART
        </li>
      </nav>
    </div>
  );
}

function ShopHome() {
  return <h1>SHOP HOME</h1>;
}

function Jersey() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    // Fetch all             players data from your backend API
    fetch("/api/shops")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setShops(data);
      })
      .catch((error) => {
        console.error("Error fetching players data:", error);
      });
  }, []);
  return (
    <div className="shopsPageDiv">
      {shops.map((shop) => (
        <Link to={`/shop/${shop.product_id}`} key={shop.product_id}>
          <div className="shopCardHolder">
            <div className="shopInfo">
              <img src={shop.product_pic} alt="" className="product_pic" />
              <p>{shop.product_name}</p>
              <p>{shop.maker}</p>
              <button className="addToCartBtn">Add to Cart</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Traning() {
  return <h1>Training</h1>;
}

function Cart() {
  return <h1>Cart</h1>;
}

function Shop() {
  const [currentSelection, setCurretnSelection] = useState("ShopHome");
  const handleSelectionChange = (section) => {
    setCurretnSelection(section);
  };

  return (
    <>
      <div className="MainShopBodyDiv">
        <ShopNav handleSelectionChange={handleSelectionChange} />
        <div className="shopsDiv">
          {currentSelection === "Jersey" && <Jersey />}
          {currentSelection === "ShopHome" && <ShopHome />}
          {currentSelection === "Training" && <Traning />}
          {currentSelection === "Cart" && <Cart />}
        </div>
      </div>
    </>
  );
}

export default Shop;
