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

function Jersey({ addToCart }) {
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
        <div className="shopCardHolder" key={shop.product_id}>
          <Link to={`/shop/${shop.product_id}`} key={shop.product_id}>
            <div className="shopInfo">
              <img src={shop.product_pic} alt="" className="product_pic" />
              <p>{shop.product_name}</p>
              <p>{shop.maker}</p>
            </div>
          </Link>

          <div className="shopAction">
            <select className="selectSizeBtn">
              <option value="">Select Size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
          </div>

          <button className="addToCartBtn" onClick={() => addToCart(shop)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

function Traning() {}

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="CartPage">
      <h1 className="cartHeader">CART</h1>
      <div className="cartItemContainer">
        {cartItems.length === 0 ? (
          <p className="emptyCart">
            Your Cart is empty. Add to your cart if you wish to BUY.
          </p>
        ) : (
          cartItems.map((item) => (
            <div key={item.product_id} className="Cart Item">
              <img src={item.product_pic} alt={item.product_name} />
              <div>
                <h3>{item.product_name}</h3>
                <p>{item.makers}</p>
                <button onClick={() => removeFromCart(item.product_id)}>
                  Trash
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function Shop() {
  const [currentSelection, setCurretnSelection] = useState("ShopHome");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Load Cart Items from localStorage
    setCartItems(storedCartItems); // Set state load cart items.
  }, []); // Empty dependency array means this effect runs once on mount

  const handleSelectionChange = (section) => {
    setCurretnSelection(section); // update current seclection
  };

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product_id !== productId
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <div className="MainShopBodyDiv">
        <ShopNav handleSelectionChange={handleSelectionChange} />
        <div className="shopsDiv">
          {currentSelection === "Jersey" && <Jersey addToCart={addToCart} />}
          {currentSelection === "ShopHome" && <ShopHome />}
          {currentSelection === "Training" && <Traning />}
          {currentSelection === "Cart" && (
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
