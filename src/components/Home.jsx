import React from 'react';
import { Link } from 'react-router-dom';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { addItem, delItem, updateQuantity } from './CartSlice';
import { BiTrash } from 'react-icons/bi';
import './Home.css';

const Home = () => {
  const [cart, setCart] = React.useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.item) || []; // Ensure data is not undefined
  const carts = useSelector((state) => state.cart) || []; // Ensure carts is not undefined

  console.log("Products state:", data);
  console.log("Cart state:", carts);

  const handleCart = () => {
    setCart(!cart);
  };

  function addToCart(product) {
    dispatch(addItem(product));
    handleCart();
  }

  function handleDel(id) {
    dispatch(delItem(id));
  }

  function qtychange(id, val) {
    const quantity = Math.max(parseInt(val, 10) || 1, 1);
    dispatch(updateQuantity({ id, quantity }));
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Products</h1>

      {/* Show a loading message if products are not yet available */}
      {data.length === 0 ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="row">
          {data.map((da) => (
            <div className="col-6 col-md-3 col-lg-3 mt-3 pt-3 pb-3" key={da.id}>
              <div className="card p-2 shadow-sm">
                 <Link to={`/product/${da.id}`} className="no-underline text-dark">
             
                <img
                  src={da.image}
                  className="img-fluid h-[200px] w-100 object-cover"
                  alt={da.name || "Product"}
                />
                </Link>
                <center>
                  <h3 className="d-flex justify-content-center align-items-center text-center text-success mt-2">
                   {da.title}
                  </h3>

                  <h2 className="d-flex justify-content-center align-items-center text-center mt-2">
                    Rs. <FaIndianRupeeSign /> {da.price}
                  </h2>
                </center>
                <button className="btn btn-success w-100 mt-2" onClick={() => addToCart(da)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Sidebar */}
      <div className={cart ? 'fixed h-full right-0 top-0 w-full md:w-[30%] bg-[#a0dd96] ease-in-out duration-500 z-50' : 'fixed right-[-100%]'}>
        <h1 className="text-3xl text-green-500 m-4">Prakash</h1>
        <AiOutlineClose className="absolute top-2 right-2 text-green-600 text-3xl ease-in-out duration-500" onClick={handleCart} />
        <h1 className="text-center">Cart Items</h1>

        {/* Cart Items */}
        <div className="product">
        {carts.length === 0 ? (
  <p className="text-center mt-4">Your cart is empty</p>
) : (
  carts.map((car) => (
    <div 
      className="ab flex flex-wrap items-center justify-between border p-4 rounded-lg mt-6 mb-6" 
      key={car.id}
    >
      <div className="w-[100px] h-[100px] flex-shrink-0">
        <img src={car.image} alt="" className="rounded-[10px] h-full w-full object-cover" />
      </div>
      <div className="flex flex-col ml-4 flex-grow">
        
        <h6 className="flex items-center">
          Price:&nbsp;&nbsp;&nbsp; <FaIndianRupeeSign /> {car.price}
        </h6>
        <h6 className="flex items-center">
          Qty : &nbsp;&nbsp;
          <button 
            className="bg-green-700 text-white px-2" 
            onClick={() => qtychange(car.id, car.quantity - 1)}
          >
            -
          </button>
          <input
            type="number"
            name="qty"
            value={car.quantity}
            onChange={(e) => qtychange(car.id, e.target.value)}
            className="bg-white w-[50px] text-center mx-1"
          />
          <button 
            className="bg-green-700 text-white px-2" 
            onClick={() => qtychange(car.id, car.quantity + 1)}
          >
            +
          </button>
        </h6>
        <h6>Item Price: Rs. {car.price * car.quantity}</h6>
        <p className="flex items-center cursor-pointer text-red-500" onClick={() => handleDel(car.id)}>
          <BiTrash className="text-2xl"  /> 
          <span className="ml-2" onClick={() => handleDel(car.id)}>Remove Item</span>
        </p>
      </div>
    </div>
  ))
)}

          <hr />

          {/* Subtotal Section */}
          {carts.length > 0 && (
            <div className="text-center p-3 bg-light border-top">
              <h4>Subtotal: Rs. {carts.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h4>
              <h3>Thank You</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
