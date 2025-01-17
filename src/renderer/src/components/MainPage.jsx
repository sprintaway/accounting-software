import React from 'react'
import DeliveryOrderPage from './DeliveryOrderPage'
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
    <div>
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