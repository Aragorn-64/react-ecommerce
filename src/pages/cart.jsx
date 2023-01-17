import {React, useEffect} from 'react'
import { CartItem } from '../components/cartItem';

export const Cart = () => {

  const removeFromCart = (item, ind) => {
    // console.log(item)
    let currentCart = JSON.parse(localStorage.getItem('cart'));
    console.log(ind);
    console.log(currentCart)
    // let index = currentCart.indexOf(item);
    if(ind > -1){
      console.log('reached splice')
      currentCart.splice(ind, 1);
      localStorage.setItem('cart', JSON.stringify(currentCart));
    }
    else{
      
      console.log('reached non splice')
    }

    console.log(currentCart)
  }
  
  

  let userCart = JSON.parse(localStorage.getItem('cart'));
  let cartItems = userCart.map((item) => {
      
      return <CartItem item ={item} key={userCart.indexOf(item)} keyCopy = {userCart.indexOf(item)} removeFromCart={removeFromCart} />
  })
  return (
    <div className="cart-items">
      {cartItems}
    </div>
  )
}
