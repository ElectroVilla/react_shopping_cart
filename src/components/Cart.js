import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";

const Cart = () => {
  const products = useSelector(state => state.cart.totalQuantity);
  const items = useSelector(state => state.cart.totalItems);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {products} Products, {items} Items</h3>
    </div>
  );
};

export default Cart;
