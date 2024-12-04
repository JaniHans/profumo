import React from 'react'
import scheduleFile from '../data/schedule.json'
import {useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';


function EditSchedule() {
    
    const {t} = useTranslation();

    const {qwerty} = useParams()
    const leitud = scheduleFile[qwerty]

    const idRef = useRef();
    const dateRef = useRef();
    const placeRef = useRef();

    const editSchedule = () => {
        scheduleFile[qwerty] = {
            "id": idRef.current.value,
            "date": dateRef.current.value,
            "place": placeRef.current.value
        }
    }

  return (
    <div>
    <label>ID:</label>
      <input ref={idRef} defaultValue={leitud.id}></input><br />
      <label>{t('navigation.date')}:</label>
      <input ref={dateRef} defaultValue={leitud.date}></input><br />
      <label>{t('navigation.place')}:</label>
      <input ref={placeRef} defaultValue={leitud.place}></input><br />
        <Link to='/admin/maintainschedule'><button onClick={editSchedule}>Modifica</button></Link>
    </div>
  )
}

export default EditSchedule