import React , {useState} from 'react'
import productsFile from "../data/products.json"
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'



function FeaturedCollection() {

  const {t} = useTranslation();

  const [products] = useState(productsFile.slice())

  return (
    <div className='featured-collection'>
      <h1>Our Collection</h1>
      <br/>
      <div className='products-container'>
        {products.slice(2, 6).map((product, index) => (
          
          <div key={product.id} className='product-card'>
            <div className='product-price'>{product.title}</div>
            <img src={product.image} alt={product.title}/>
            <div className='product-price'>{product.price}€</div>
            
          </div>
          
        ))}
      </div>
      <Link to={'/client/products'}><Button variant='dark'>{t('enter.open')}</Button></Link>
    
  
    </div>
  )
}

export default FeaturedCollection