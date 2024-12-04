import React , {useState} from 'react'
import scheduleFile from '../data/schedule.json'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'

function MaintainSchedule() {

const {t} = useTranslation();

const [schedule, setSchedule] = useState(scheduleFile.slice());



const deleteEvent = (id) => {
    setSchedule((prev) =>
    prev.filter(
        (schedule) => !(schedule.id === id)
    )
    )
    alert("Event deleted")
};

  return (
    <div>
        <Link to={'/admin/addschedule'}><button>Aggiungi Evento</button></Link>
        {schedule.map((schedules, index) =>
        <div key={`${schedules.id}`} className='schedules_container'>
            <div className='schedules_items'>{schedules.date}</div>
            <div className='schedules_items'>{schedules.place}</div>
            <Link to={"/admin/editschedule/" + index}><button>{t('enter.change')}</button></Link>
            <button onClick={() => deleteEvent(schedules.id)}>{t('enter.remove')}</button>
            
            </div>
            
        )}

    </div>
  )
}

export default MaintainSchedule