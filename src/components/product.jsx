import React from 'react'

export const Product = ({item}) => {
  // console.log(item)
  return (
    <>
      
      <div className="product card">
        <img src={item.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${item.price}</h6>
          <p className="card-text">{item.description}</p>
          <p className="badge bg-secondary">{item.category}</p>
          <p className="card-text">Rating: <b>{item.rating.rate}</b> with <b>{item.rating.count}</b> reviews</p>
          <a href="#" className="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </>
  )
}
