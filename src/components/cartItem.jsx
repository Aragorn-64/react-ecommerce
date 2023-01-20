import React from 'react'
import '../App.css';
import { ChangeQuantityInput } from './changeQuantityInput';

export const CartItem = ({item, keyCopy, removeFromCart}) => {
    // console.log(removeFromCart)
    // console.log("item : ", item)
  return (
    <>
        <div className="cart-item card">
            <div className="card-body">
                {keyCopy+1}) <h5 className="card-title cart-title"> {item.title} </h5>
                <h4 className="card-subtitle mb-2 text-muted cart-price">${item.price}</h4>
                <button className="remove-from-cart btn btn-outline-dark" onClick={() => removeFromCart(item)}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg> 
                </button>

                <ChangeQuantityInput/>
                
                <p className="card-text">{item.description}</p>
                <p className="badge bg-secondary">{item.category}</p>
                <p className="card-text">Rating: <b>{item.rating.rate}</b> with <b>{item.rating.count}</b> reviews</p>
            </div>
        </div>
    </>
  )
}
