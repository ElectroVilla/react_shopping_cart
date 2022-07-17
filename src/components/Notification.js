import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert } from '@mui/material'
import { uiActions } from '../store/ui-slice';

const Notification = ({type, message}) => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification)
    const handleClose = () => {
        dispatch(uiActions.showNotification({
            open: false
            }))
    }
    useEffect(() => {
        console.log("Notification componentDidUpdate => " + notification.message)
        setTimeout(() => {
            dispatch(uiActions.showNotification({
                open: false
                }))
        }, 3000);
    }, [notification.message, dispatch]);
    
  return (
    <div>
        {notification.open && <Alert onClose={handleClose} severity={type}>{message}</Alert>}
    </div>
  )
}

export default Notification