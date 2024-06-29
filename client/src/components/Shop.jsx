import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Shop.css";
import ImageSlider from "./ImageSlider";

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
        <i
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("Training")}
        >
          TRANING
        </i>
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
  const images = [
    "https://a.espncdn.com/photo/2023/0710/r1196104_1296x729_16-9.jpg",
    "https://www.footballshirtculture.com/images/2023/chelsea_2023_24_nike_away_kit.jpg",
    "https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/Kit%20launch%202023-24/Third-Kit_23-24_EARLY-ACCESS_Web-Hero-Image_2880x1620_V1.jpg",
    "https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/news/2023/07/03/Training-Kit_2023-24-Web-Hero-Asset_2880x1620.jpg",
  ];
  return (
    <>
      <ImageSlider images={images} />
      <div className="JerseySelectContainer">
        <img
          src="https://image-cdn.hypb.st/https%3A%2F%2Fuk.hypebeast.com%2Ffiles%2F2023%2F07%2Fchelsea-football-club-new-home-jersey-2.jpg?cbr=1&q=90"
          alt=""
          className="JerseySelectImg"
        />
        <img
          src="https://www.thesun.co.uk/wp-content/uploads/2023/08/chelsea-away-kit-time-shine-841400708.jpg?strip=all&w=768"
          alt=""
          className="JerseySelectImg"
        />
        <img
          src="https://www.soccerbible.com/media/150965/chelsea-tab-min.jpg"
          alt=""
          className="JerseySelectImg"
        />
      </div>
    </>
  );
}

function Jersey({ addToCart }) {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("/api/shops")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filter only the items with category "Jersey"
        const jerseyItems = data.filter((item) => item.category === "Jersey");
        setShops(jerseyItems);
      })
      .catch((error) => {
        console.error("Error fetching shop data:", error);
      });
  }, []);

  return (
    <div className="shopsPageDiv">
      {shops.map((shop) => (
        <div className="shopCardHolder" key={shop.product_id}>
          <Link to={`/shop/${shop.product_id}`}>
            <div className="shopInfo">
              <img src={shop.product_pic} alt="" className="product_pic" />
              <p>{shop.product_name}</p>
              <p>{shop.maker}</p>
              <h2 className="price">${shop.price}</h2>
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

function Traning({ addToCart }) {
  const [trainingItems, setTrainingItems] = useState([]);

  useEffect(() => {
    fetch("/api/shops")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filter only the items with category "Training"
        const trainingData = data.filter(
          (item) => item.category === "Training"
        );
        setTrainingItems(trainingData);
      })
      .catch((error) => {
        console.error("Error fetching training data:", error);
      });
  }, []);

  return (
    <div className="shopsPageDiv">
      {trainingItems.map((shop) => (
        <div className="shopCardHolder" key={shop.product_id}>
          <Link to={`/shop/${shop.product_id}`}>
            <div className="shopInfo">
              <img src={shop.product_pic} alt="" className="product_pic" />
              <p>{shop.product_name}</p>
              <p>{shop.maker}</p>
              <h2 className="price">${shop.price}</h2>
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

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="CartPage">
      <h1 className="cartHeader">SHOPPING CART</h1>
      <div className="cartItemContainer">
        {cartItems.length === 0 ? (
          <p className="emptyCart">
            Your Cart is empty. Add to your cart if you wish to BUY.
          </p>
        ) : (
          cartItems.map((item) => (
            <div key={item.product_id} className="CartItemContainer">
              <img
                src={item.product_pic}
                alt={item.product_name}
                className="cartItemPic"
              />
              <div className="cartItemInfo">
                <h3>{item.product_name}</h3>
                <p>{item.maker}</p>
              </div>
              <div className="trashBtnDiv">
                <button
                  onClick={() => removeFromCart(item.product_id)}
                  className="trashBtn"
                >
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
          {currentSelection === "Training" && <Traning addToCart={addToCart} />}
          {currentSelection === "Cart" && (
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
