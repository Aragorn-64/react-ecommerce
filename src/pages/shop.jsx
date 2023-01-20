import '../App.css';
import '../loading-wheel.css';
import React, {useEffect, useState} from 'react'
// import {fetchProducts} from '../products'
import { Product } from '../components/product'
import { async } from 'q';
import axios from 'axios';
export const Shop = ({prods, setProds}) => {

    let [cart, setCart] = useState([]);
    // const animateAddToCart = () => {

    // }
    const addToCart = function(item){
        // console.log(this.item.title);
        // console.log(this.title)
        let userCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        // console.log(localStorage.getItem('cart'))
        console.log(userCart)
        userCart.push(item);
        localStorage.setItem('cart',JSON.stringify(userCart));
        // console.log("updated ", localStorage.getItem('cart'))
    }

    let [products, setProducts] = useState({arr : [], isLoading : true, addToCart : addToCart});
    useEffect(() => {
        const getProductsAPI = async (number = 15) => {
            // const response = await axios.get(`https://fakestoreapi.com/products?limit=${number}`);
            // // console.log(response);
            // setProducts({response.data, false});
            // console.log('loaded products');
            axios.get(`https://fakestoreapi.com/products?limit=${number}`)
                .then( data => {
                    setProducts({arr : data.data, isLoading: false, addToCart : addToCart});
                })
                .catch(e => console.log(e));
        }
        getProductsAPI();
    },[])

    

    let prodList = products.arr.map( item => {
        // console.log(products)
        // let prop = {item, addFun : addProdToCart};
        return <Product item = {item} addToCart = {products.addToCart} key={item.id}/>
    })
    // console.log(products);


    return (
        <>  
            
            <div className="products">
                {products.isLoading === false ? prodList : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
            </div>

        </>
    )
}

/* <div>
                {localStorage.getItem('cart').toString()}
            </div> */

