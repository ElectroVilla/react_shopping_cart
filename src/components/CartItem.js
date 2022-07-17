import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
// import { cartActions } from "./../store/cartSlice";
import { cartActions } from "../store/cart-slice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(cartActions.addToCart({ name, id, price, quantity: quantity + 1 }));
  };
  const dec = () => {
    dispatch(cartActions.removeFromCart(id)); };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>X {quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={dec}>
        -
      </button>
      <button className="cart-actions" onClick={inc}>
        +
      </button>
    </div>
  );
};

export default CartItem;
