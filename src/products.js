import axios from "axios";
import { async } from "q";
export const PRODUCTS = [
    {
        id: 1,
        productName: "Men's Hoodie - Blue",
        price: 999.0,
        description: "Comfortable winter hoodie",
        quantity: 100
    },
    {
        id: 2,
        productName: "Women's Hoodie - Blue",
        price: 999.0,
        description: "Comfortable winter hoodie",
        quantity: 100
    },
    {
        id: 3,
        productName: "Men's Hoodie - Red",
        price: 999.0,
        description: "Comfortable winter hoodie",
        quantity: 100
    },
    {
        id: 4,
        productName: "Women's Hoodie - Blue",
        price: 999.0,
        description: "Comfortable winter hoodie",
        quantity: 100
    },
    {
        id: 5,
        productName: "Unisex Knitted Beanie - Green (Regular)",
        price: 699.0,
        description: "Comfortable winter cap",
        quantity: 100
    },
    {
        id: 6,
        productName: "Unisex Knitted Beanie - Green (Large)",
        price: 799.0,
        description: "Comfortable winter cap",
        quantity: 100
    }
]


export const fetchProducts = async (number) => {
    let res = await axios.get(`https://fakestoreapi.com/products?limit=${number}`);
    console.log(res);
            // .then(res => {
            //     console.log('data sent')
            //     return res.data
            // })
            // .catch(err => console.log(err))
}