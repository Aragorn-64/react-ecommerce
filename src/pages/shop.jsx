import '../App.css';
import React, {useEffect, useState} from 'react'
// import {fetchProducts} from '../products'
import { Product } from '../components/product'
import { async } from 'q';
import axios from 'axios';
export const Shop = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        const getProductsAPI = async (number = 15) => {
            const response = await axios.get(`https://fakestoreapi.com/products?limit=${number}`);
            // console.log(response);
            setProducts(response.data);
        }
        getProductsAPI();
    },[])

    let prodList = products.map( item => {
        return <Product item = {item} key={item.id}/>
    })
    return (
        <>
            <div className="products">
                {prodList}
            </div>
        </>
    )
}
