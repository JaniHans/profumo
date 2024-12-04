import React, { useState } from 'react'
import scheduleFile from '../data/schedule.json'
import './Products.css'

function MarketSchedule() {

    const [schedule] = useState(scheduleFile.slice());



  return (
    <div className='marketschedule'>
        <h1>Date dei Mercaitini di Natale</h1>
        {schedule.map(schedules =>
        <div className='schedules_container'>
            <div className='schedules_items'>{schedules.date}</div>
            <div className='schedules_items'>{schedules.place}</div>
            </div>
        )}

    </div>
  )
}

export default MarketSchedule