import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../assets/css/productPage.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/shops/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching individual shops data:", error);
      });
  }, [id]);
  return (
    <div className="productPageDiv">
      <div className="productPageContainer">
        {/* Conditional rendering: check if product is not null */}
        {product ? (
          <>
            <div>
              <img src={product.product_pic} alt="" className="product_pic2" />
            </div>
            <div className="productInfoDiv">
              <div className="productDetailsDiv">
                <p className="productDetails">{product.product_name}</p>
                <p className="productDetails">{product.maker}</p>
                <p className="productDetails">
                  Description: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Unde possimus, suscipit esse voluptatum
                  similique aliquid enim, numquam, dolorum.
                </p>
              </div>
              <div className="shopAction">
                <select className="selectSizeBtn">
                  <option value="">Select Size</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                </select>
                <button className="addToCartButton">Add to Cart</button>
              </div>
            </div>
          </>
        ) : (
          // Loading state: Display a loading message while fetching data
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
