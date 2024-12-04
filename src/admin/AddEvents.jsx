import React, {useRef} from 'react'
import productsFile from '../data/schedule.json'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function AddEvents() {

    const {t} = useTranslation();

    const idRef = useRef();
    const dateRef = useRef();
    const placeRef = useRef();

    const addProducts = () => {
        productsFile.push({
            "id": idRef.current.value,
            "date": dateRef.current.value,
            "place": placeRef.current.value
        })
    }
  return (
    <div>
        <label>ID</label><br />
        <input ref={idRef}></input><br />
        <label>{t('navigation.date')}</label><br />
        <input ref={dateRef}></input><br />
        <label>{t('navigation.place')}</label><br />
        <input ref={placeRef}></input><br /> 
        <Link to='/admin/maintainschedule'><button onClick={addProducts}>Aggiungi</button><br /></Link>
    </div>
  )
}

export default AddEvents