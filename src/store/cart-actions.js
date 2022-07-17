import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return async(dispatch) => {
        const fetchHandler = async() => {
            const response = await fetch("https://romance-tic-tac-toe.firebaseio.com/cartItems.json");
            const data = await response.json();
            return data;
        }
        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData));
        }
        catch(err) {
            dispatch(uiActions.showNotification({
                message: "Fetching data failed => " + err,
                type: "error",
                open: true
                }));
            console.log(err)
        }
    }
}

export const sendCartData = (cart) => {
    return async(dispatch) => {
        dispatch(uiActions.showNotification({
        message: "Sendding request...",
        type: "warning",
        open: true
        }));
        const sendRequest = async () => {
        await fetch("https://romance-tic-tac-toe.firebaseio.com/cartItems.json", 
        {
            method: "PUT",
            body: JSON.stringify(cart)
        })
        // const data = await res.json();
        // Send state as request is successful
        dispatch(uiActions.showNotification({
            message: "Request sent to database successfully",
            type: "success",
            open: true
            }));
        }
        try{
            await sendRequest()
        }catch(err){
            dispatch(uiActions.showNotification({
                message: "Sending request failed => " + err,
                type: "error",
                open: true
                }));
        }
    }
}