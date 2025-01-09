import React from 'react'
import DeliveryOrderPage from './DeliveryOrderPage'
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
    <div>
        <h1>
            This is an accounting app! With Main page!
        </h1>
    </div>
    <button className="delivery-order-button">
        <Link to="/delivery-order" className="button-link">
        Delivery Order
        </Link>
    </button>
    </>
  )
}

export default MainPage