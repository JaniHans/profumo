import React,  { useState  } from 'react'
import productsFile from '../data/products.json'
import './Products.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


function Products() {
 
  const [products, setProducts] = useState(productsFile.slice())

  const { t } = useTranslation()

  const handleSort = (event) => {
    const sortValue = event.target.value;

    console.log("Margid tüüp:", typeof products);
    console.log("Kas on massiiv:", Array.isArray(products));
    console.log("Margid sisu:", products);

    // Teeme kindla koopia
    let sortreeritud = Array.isArray(products) ? [...products] : [];
    
    if (!Array.isArray(sortreeritud)) {
      console.error("Sorteeritud pole massiiv!");
      return;
    }


    try {
    switch (sortValue) {
      case "LowToHigh":
        sortreeritud.sort((a, b) => a.price - b.price);
        break;
        case "HighToLow":
          sortreeritud.sort((a, b) => b.price - a.price);
        break;
        case "AZ":
        sortreeritud.sort((a, b) => a.title.localeCompare(b.title));
        break;
        case "ZA":
        sortreeritud.sort((a, b) => b.title.localeCompare(a.title));
        break;
        default:
          break;

    }

    setProducts(sortreeritud);

  } catch(error) {
    console.error("Sorteerimisel tekkis viga:", error);
      console.log("Probleemsed andmed:", sortreeritud);
    }
  }



  return (
    <div>
      <div className='background_image'>
      <div className='filtercontainer'>
      <select onChange={handleSort}>
      <option value="">{t('sort.select')}</option>
      <option value="LowToHigh">{t('sort.lowToHigh')}</option>
      <option value="HighToLow">{t('sort.highToLow')}</option>
      <option value="AZ">{t('sort.az')}</option>
      <option value="ZA">{t('sort.za')}</option>
      

      </select>
      </div>
      <div className='products-container'>
        {products.map((product, index) => (
          <Link to={'/admin/product/' + index}>
          <div key={product.id} className='product-card'>
            <div className='product-price'>{product.title}</div>
            <img src={product.image} alt={product.title}/>
            <div className='product-price'>{product.price}€</div>
            
          </div>
          </Link>
        ))}
      </div>
           
      </div>
    </div>
  )
}

export default Products