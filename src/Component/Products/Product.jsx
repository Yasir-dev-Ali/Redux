import React, { useEffect } from 'react'
import { useState } from 'react'
import '../Products/Product.css'
// import {useDisptach} from 'react-redux'
// import { addCart } from '../../store/cartSlice'

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fakeDate = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            
            console.log(data);
            setProducts(data) 
        }
        fakeDate()
    },[]);
    const  productHandle = (product)=>{
        const dispatch = useDisptach()
        dispatch(addCart(product))

    }

  return (
   <>

   <div className="product">
    {
        products.map((product)=>{
            return(
            <div className='cart'>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <p>${product.price}</p>
                <button className='btn'  onClick={productHandle}>Add to Cart</button>


            </div>
            )
        })
    }

   </div>
   </>
  )
}

export default Product
