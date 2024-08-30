import React from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

function ProductDetails() {

    const { id } = useParams();

    const fetchProductData = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        // setdata(response);
        console.log(response);
        
    }

    fetchProductData()
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails