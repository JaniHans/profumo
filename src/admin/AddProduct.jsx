import React from 'react'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'

function AddProduct() {

    const {t} = useTranslation();

  return (
    <div>
        <label>{t('edit.title')}</label><br />  
        <input></input><br />
        <label>{t('edit.price')}</label><br />
        <input></input><br />
        <label>{t('edit.image')}</label><br />
        <input></input><br />
        <Link to="/admin/maintainproducts"><button>{t('enter.save')}</button></Link>
    </div>
  )
}

export default AddProduct