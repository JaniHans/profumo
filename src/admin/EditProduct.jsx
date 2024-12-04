import React from 'react'
import { useTranslation } from 'react-i18next';

import { useParams, Link } from 'react-router-dom';



const EditProduct = () =>  {
    const {t} = useTranslation();
    const {category, id} = useParams(); // kategooria ja id urlist
    // const productId= parseInt(id, 10); // muuda id numbriks

    const productId= Number(id); // muuda id numbriks


    // id 


  return (
  <div>


      
    <br />
    <Link to="/admin/maintainproducts">
    <button type="submit">{t('enter.save')}</button></Link>
   

  </div>
  )
}

export default EditProduct