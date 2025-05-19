import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart,removeAllFromCart } from '../store/slices/cart'
import { useNavigate } from 'react-router-dom';

export const CartItem = (props) => {

    const { item} = props
     const dispatch = useDispatch();
     const naviagte = useNavigate();
     
       const handleNavigateToDetails = () => {
         naviagte(`/product-details/${item.id}`);
       };
  return (
     <tr>
      <td className="d-flex align-items-center gap-3" onClick={() => handleNavigateToDetails()}>
        <img src={item.thumbnail} alt={item.title} style={{ width: '60px' }} />
        <div>
          <strong>{item.title}</strong>
          {/* <div className="text-muted">Product Code: {item.code}</div> */}
        </div>
      </td>

      <td>
        <div className="d-flex align-items-center">
          <button className="btn btn-dark" onClick={() => dispatch(addToCart(item))}>+</button>
          <input
            className="form-control text-center mx-1"
            type="text"
            value={item.quantity}
            readOnly
            style={{ width: '50px' }}
          />
          <button className="btn btn-light border" onClick={() => dispatch(removeFromCart(item))}>-</button>
        </div>
      </td>

      <td>
        <button className="btn btn-outline-secondary" onClick={()=>dispatch(removeAllFromCart(item))}>x</button>
      </td>

      <td>£{item.price}</td>
    </tr>
  )
}
