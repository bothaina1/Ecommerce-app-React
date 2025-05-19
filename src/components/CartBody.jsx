import React from 'react'
import { useSelector } from 'react-redux'
import {CartItem} from './CartItem'

export const CartBody = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <div className="container">
      <h3 className="mb-5">Cart</h3>
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            console.log(item),
            <CartItem  item={item} />
          ))}
        </tbody>
      </table>
      <div className="text-end fw-bold fs-5 m-5">
        {`Total: $${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}`}
      </div>
    </div>
  )
}


export default CartBody; 