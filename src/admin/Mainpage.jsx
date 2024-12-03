import React from 'react'
import './mainpage.css'
import {useState} from 'react'
import { useTranslation } from 'react-i18next';
import ControlledCarousel from './ControlledCarousel';
import FeaturedCollection from './FeaturedCollection';




function Mainpage() {

  const { t } = useTranslation();

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") || "false");

  const modeToDark = () => {
    setDarkMode("true");
    localStorage.setItem("theme", "true");
  }

  const modeToLight = () => {
    setDarkMode("false")
    localStorage.setItem("theme", "false");
  }


  return (
     
    <div className={darkMode === "true" ? "App-dark" : "App"}>
      {darkMode === "false" && <img onClick={modeToDark} className='darkModeIcon' src='/images/dark.png' alt='not found'/>}
      {darkMode === "true" &&  <img onClick={modeToLight} className='darkModeIcon' src='/images/light.png' alt='not found'/>}
            
            <img className="layout" src="/images/layout/horizontal.jpg" alt="not found"/>
            <div className="mission-section">
      <h1>{t('mission.title')}</h1>
      <p>{t('mission.paragraph1')}</p>
      <p>{t('mission.paragraph2')}</p>
      <p>{t('mission.paragraph3')}</p>
      <ControlledCarousel/>
      <FeaturedCollection/>
    </div>
   
      
      </div>
    
  )
}

export default Mainpage