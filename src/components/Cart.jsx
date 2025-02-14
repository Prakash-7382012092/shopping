import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, delItem } from './CartSlice';
import { BiTrash } from 'react-icons/bi';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="overflow-x-auto md:overflow-hidden">
          <table className="table table-bordered table-responsive table-striped p-4"
            style={{ width: "100%", minWidth: "400px" }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img
                      src={item.image}
                      className="img-fluid h-[100px] w-[100px] rounded-[10px]"
                      alt="Product"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        className="bg-green-500 text-white p-3"
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="bg-green-500 text-white p-3"
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{item.price * item.quantity}</td>
                  <td className='d-flex'>
                    <BiTrash
                      className="text-2xl cursor-pointer"
                      onClick={() => dispatch(delItem(item.id))}
                    />{" "}
                    Remove Item
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}>
                  <button className="btn btn-success">Continue Shopping</button>
                </td>
                <td colSpan={3}>Total: Rs. {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
