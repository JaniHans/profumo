import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import productsFile from '../data/products.json'
import './singleproduct.css'

function SingleProduct() {
    const {x} = useParams();
    const [products, setProducts] = useState(productsFile.slice())
    const leitud = products[x]
    console.log(x)
    if (!leitud === undefined) {
        return <div>Not found</div>
      }


    
  return (
    <div>
        <div className='singleproductcontainer'>
        <div className='product-price'>{leitud.title}</div><br />
        <img className='singleproductimage' src={leitud.image} alt=''/>
        <div className='product-price'>{leitud.price}€</div>
        </div>
    </div>
  )
}

export default SingleProduct