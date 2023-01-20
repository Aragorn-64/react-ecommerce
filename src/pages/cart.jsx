import {React, useEffect, useState} from 'react'
import { CartItem } from '../components/cartItem';

export const Cart = () => {
  if(!localStorage.getItem('cart')){
    console.log('no LS')
    localStorage.setItem('cart', JSON.stringify([]))
  }
  let [cartTotal, setCartTotal] = useState(0);
  let [userCart, setUserCart] = useState(JSON.parse(localStorage.getItem('cart')));

  const removeFromCart = (item) => {
    let idToDelete = item.id, found=0;
    setUserCart(userCart.filter((arrItem) => {
        if(found == 0 && arrItem.id !== idToDelete){
          found=1; return false;
        }
        else return true;
     }))
    localStorage.setItem('cart', JSON.stringify(userCart))
  }

  // const removeFromCart = (item, ind) => {
  //   // console.log(item)
  //   let currentCart = JSON.parse(localStorage.getItem('cart'));
  //   console.log(ind);
  //   console.log(currentCart)
  //   // let index = currentCart.indexOf(item);
  //   if(ind > -1){
  //     console.log('reached splice')
  //     currentCart.splice(ind, 1);
  //     localStorage.setItem('cart', JSON.stringify(currentCart));
  //   }
  //   else{
      
  //     console.log('reached non splice')
  //   }

  //   console.log(currentCart)
  // }
  let mapItems = userCart.map((item) => {
    return <CartItem item ={item} key={userCart.indexOf(item)} keyCopy = {userCart.indexOf(item)} removeFromCart={removeFromCart} />
  })
  let cartItems = userCart == [] ? "Cart is empty" : mapItems;

  // let userCart = JSON.parse(localStorage.getItem('cart'));
  // console.log(userCart)
  // let cartItems = userCart.map((item) => {
  //     // let newTotal = cartTotal + item.price
  //     // setCartTotal(newTotal)
  //     // console.log(cartTotal)
  //     return <CartItem item ={item} key={userCart.indexOf(item)} keyCopy = {userCart.indexOf(item)} removeFromCart={removeFromCart} />
  // })
  return (
    <div className="cart-items">
      {cartItems == "Cart is empty"? console.log("Cart is empty") : cartItems}
    </div>
  )
}
