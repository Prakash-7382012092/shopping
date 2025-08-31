import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { addItem } from "./CartSlice";
import './Home.css';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const dispatch = useDispatch();

  // Get products from Redux store
  const products = useSelector((state) => state.item);
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <h2 className="text-center mt-5">Product not found!</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
          <br/>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h1 className="text-success">{product.title}</h1>
          <h3 className="d-flex align-items-center">
            Rs. <FaIndianRupeeSign /> {product.price}
          </h3>
          <p className="mt-3">{product.description || ""}</p>

          <button
            className="btn btn-success mt-3"
            onClick={() => dispatch(addItem(product))}
          >
            Add To Cart
          </button>
          <br/><br/><br/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
