import React from 'react'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../data/products.json'
import decorations from '../data/decorations.json'



const EditProduct = () =>  {
    const {t} = useTranslation();
    const {category, id} = useParams(); // kategooria ja id urlist
    const productId= parseInt(id, 10); // muuda id numbriks

    const dataSource = category === 'product' ? products : decorations;
    const product = dataSource.find((p) => p.id === productId);

  const [editedProduct, setEditedProduct] = useState(product || {});
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>
  }
    
  const handleSave = () => {
    console.log('Updated Product:', editedProduct);
    navigate('/admin/adminpage'); // mine tagasi admin lehele
  };

  return (
  <div>

    <div>Edit Product</div>
    <form onSubmit={(e) =>{
      e.preventDefault();
      handleSave();
    }}>
    <label>
      Title:
      <input
      type="text"
      value={editedProduct.title}
      onChange={(e) =>
        setEditedProduct({ ...editedProduct, title: e.target.value})

      }
      />
    </label>
    <label>
      Price:
      <input
      type="number"
      value={editedProduct.price}
      onChange={(e) =>
        setEditedProduct({ ...editedProduct, price: e.target.value})

      }
      />
    </label>
    <label>
      Image:
      <input
      type="text"
      value={editedProduct.image}
      onChange={(e) =>
        setEditedProduct({ ...editedProduct, image: e.target.value})

      }
      />
    </label>
    <button type="submit">Save</button>
    </form>
  </div>
  )
}

export default EditProduct