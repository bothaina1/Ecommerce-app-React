import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
// Optional for custom styles

const CartIcon = () => {
  const cartSize =useSelector((state) => state.cart.cartSize);
  return (
    <div className="position-relative d-inline-block">
      <BsCartFill size={30} />
      {cartSize > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartSize}
          <span className="visually-hidden">cart items</span>
        </span>
      )}
    </div>
  );
};

export default CartIcon;
