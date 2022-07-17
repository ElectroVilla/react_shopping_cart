import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification";
// import {uiActions} from "./store/ui-slice";
import { fetchData, sendCartData } from "./store/cart-actions";

let isFirstRender = true;

function App() {
  const cart = useSelector(state => state.cart);
  const isLoggenIn = useSelector(state => state.auth.isLoggenIn);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  
  
  
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      {!isLoggenIn && <Auth />}
      {isLoggenIn && <Layout />}
    </div>
  );
}

export default App;

// componentDidMount() {
  //   console.log("App componentDidMount");
  // }
  // shouldDomponentUpdate(nextProps, nextState) {
  //   console.log("App componentDidUpdate");
  // }
  /**
   setTimeout(() => {
                state.notification = null
            }, 3000);
   */


  // useEffect(() => {
  //   if (isFirstRender) {
  //     isFirstRender = false;
  //     return;
  //   }
  //   const sendRequest = async () => {
  //     // Send state as sending data to server
  //     dispatch(uiActions.showNotification({
  //       message: "Sendding request...",
  //       type: "warning",
  //       open: true
  //       }));
  //     const res = await fetch("https://romance-tic-tac-toe.firebaseio.com/cartItems.json", 
  //     {
  //       method: "PUT",
  //       body: JSON.stringify(cart)
  //     })
  //     const data = await res.json();
  //     // Send state as request is successful
  //     dispatch(uiActions.showNotification({
  //       message: "Request sent to database successfully",
  //       type: "success",
  //       open: true
  //       }));
  //   }
  //   sendRequest().catch(err => {
  //     // Send state as error
  //     dispatch(uiActions.showNotification({
  //       message: "Sending request failed => " + err,
  //       type: "error",
  //       open: true
  //       }));
  //     console.log(err)
  //   });
  // }, [cart, dispatch]);
