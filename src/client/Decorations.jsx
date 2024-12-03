import React from 'react'
import decorationsFile from '../data/decorations.json'
import productsFile from '../data/products.json'
import { useState } from 'react'
import './Products.css'
function Decorations() {

    const [decorations, setDecorations] = useState(decorationsFile.slice())

    const [products, setProducts] = useState(productsFile.slice())

  return (
    <div>
    <div className='products-container'>
        {decorations.map(decoration => (
            <div key={decoration.id} className='product-card'>
                <div className='product-price'>{decoration.title}</div>
                <img style={{width: 200}} src={decoration.image} alt={decoration.title}/>
                <div className='product-price'>{decoration.price}€</div>
            </div>
            
        ))}
    </div>
        <div>
          {products.map(product =>
          <div key={product.id}>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <img style={{width: 200}} src={product.image} alt={product.title}/>
            </div>
          )}
        </div>
        

    </div>
  )
}

export default Decorations