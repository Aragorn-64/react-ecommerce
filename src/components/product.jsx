import React from 'react'
import '../App.css';

export const Product = (props) => {
  // console.log(props.addToCart)
  return (
    <>
      
      <div className="product card">
        <img src={props.item.image} className="card-img-top img-fluid prod-image" alt="..."/>
        <div className="card-body prod-body">
          <h5 className="card-title">{props.item.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${props.item.price}</h6>
          <p className="card-text">{props.item.description}</p>
          <p className="badge bg-secondary">{props.item.category}</p>
          <p className="card-text">Rating: <b>{props.item.rating.rate}</b> with <b>{props.item.rating.count}</b> reviews</p>
        </div>
        <button className="btn btn-primary add-to-cart"  onClick={() => props.addToCart(props.item)}>Add to cart</button>
      </div>
    </>
  )
}
// onClick={addFun(item)}
// props.item) => 
// onClick={props.addToCart.bind(this)}