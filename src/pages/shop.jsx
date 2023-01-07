import React from 'react'
import {fetchProducts, PRODUCTS} from '../products'
import { Product } from '../components/product'
export const Shop = () => {
    let res = fetchProducts()
    console.log(res)
    return (
        <>
            <div>Shop</div>
            <div className="products grid grid-cols-2">
            
            </div>
        </>
    )
}
