import React, { useState, useEffect } from 'react'
import classes from './ProductDetail.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader';


function ProductDetail() {
  const [product, setproduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { productId } = useParams()
  useEffect(() => {
    setIsLoading(true)
    axios.get (`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data);
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err);
      setIsLoading(false);
    })
  }, [])
  // console.log(product)
  return (
    <LayOut>
      {isLoading? (<Loader/>):(<ProductCard
        product={product}
        flex ={true}
        renderDesc={true}
        renderAdd={true}
      />)}
      
    </LayOut>
  );
}

export default ProductDetail