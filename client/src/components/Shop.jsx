import { useState } from "react";
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
  return <h1>Jersey</h1>;
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
        {currentSelection === "Jersey" && <Jersey />}
        {currentSelection === "ShopHome" && <ShopHome />}
        {currentSelection === "Training" && <Traning />}
        {currentSelection === "Cart" && <Cart />}
      </div>
    </>
  );
}

export default Shop;
