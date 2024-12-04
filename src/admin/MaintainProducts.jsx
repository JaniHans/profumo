import React , {useState} from 'react'
import products from '../data/products.json'
import decorations from '../data/decorations.json'
import { ToastContainer,  toast } from 'react-toastify';
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const  MaintainProducts = () => {

  // pane m6lemad kokku
  const [allProducts, setAllProducts] = useState([
    ...products.map((p) => ({ ...p, category: 'product'})),
    ...decorations.map((d) => ({ ...d, category: 'decoration'})),
  ]);
  //remove product
  const removeProduct = (id, category) => {
    setAllProducts((prevProducts) =>
      prevProducts.filter(
        (product) => !(product.id === id && product.category === category)
      )
    )
    toast.success('Product removed')
};

const {t} = useTranslation();

  

 



  return (

    <div>
      <Link to="/admin/addproduct/">
      <button>Add New Product</button></Link>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
    {allProducts.map((product, index) => (
      
      <tr key={`${product.category}-${product.id}`}>
      <td>{product.title}</td>
      <td>{product.price}€</td>
      <td><img style={{width: '100px'}} src={product.image} alt={product.title} /></td>
      <td>
        <Link to={`/admin/editproduct/${product.category}/${product.id}`}><button>{t('enter.change')}</button></Link><br />
        <button onClick={() => removeProduct(product.id, product.category)}>{t('enter.remove')}</button>
      </td>
      </tr>
    ))}
    </tbody>
    </table>
    <ToastContainer
         position="bottom-right"
         autoClose={4000}
         theme="dark"
        />
    </div>
  )
}

export default MaintainProducts