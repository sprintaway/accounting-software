import React from 'react'
import { Link } from 'react-router-dom';

const DeliveryOrderPage = () => {
  return (
    <>
    <div>This is the Delivery Order Page!</div>
    <button className="delivery-order-button">
            <Link to="/" className="button-link">
            Main Page
            </Link>
    </button>
    </>
  )
}

export default DeliveryOrderPage