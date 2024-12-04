import React from 'react'
import { useTranslation } from 'react-i18next';
import { useState , useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';



const EditProduct = () =>  {
    const {t} = useTranslation();
    const {category, id} = useParams(); // kategooria ja id urlist
    const productId= parseInt(id, 10); // muuda id numbriks

    const [products, setProducts] = useState([]);
    const [editedProduct, setEditedProduct] = useState({});
    const navigate = useNavigate();
  
    useEffect(() => {
      // Load data from LocalStorage based on category
      const storedProducts = JSON.parse(localStorage.getItem(category)) || [];
      setProducts(storedProducts);
  
      // Find the product to edit
      const productToEdit = storedProducts.find((p) => p.id === productId);
      if (productToEdit) {
        setEditedProduct(productToEdit);
      }
    }, [category, productId]);
  
    
  const handleSave = () => {
    // Update the product in the products array
    const updatedProducts = products.map((product) =>
      product.id === productId ? editedProduct : product
    );

    // Save updated products back to LocalStorage
    localStorage.setItem(category, JSON.stringify(updatedProducts));

    console.log('Updated Product:', editedProduct);
    navigate('/admin/adminpage'); // Navigate back to the admin page
  };

  return (
  <div>

    <div>{t('edit.product')}:</div>
    <form onSubmit={(e) =>{
      e.preventDefault();
      handleSave();
    }}>
    <label>
      {t('edit.title')}
      </label><br />
      <input
      type="text"
      value={editedProduct.title || ''}
      onChange={(e) =>
        setEditedProduct({ ...editedProduct, title: e.target.value})

      }
      />
    <br />
    <label>
    {t('edit.price')}
      </label><br />
      <input
      type="number"
      value={editedProduct.price || ''}
      onChange={(e) =>
        setEditedProduct({ ...editedProduct, price: e.target.value})

      }
      />
    <br />
    <label>
    {t('edit.image')}
      </label><br />
      <input
      type="text"
      value={editedProduct.image || ''}
      onChange={(e) =>
        setEditedProduct({ ...editedProduct, image: e.target.value})

      }
      />
    <br />
    <Link to="/admin/maintainproducts">
    <button type="submit">{t('enter.save')}</button></Link>
    </form>
  </div>
  )
}

export default EditProduct