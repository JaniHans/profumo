import React, { useRef } from 'react'
import './contacts.css'

import { useTranslation } from 'react-i18next';


    function Contacts() { 

      
      const emailRef = useRef();

      const {t} = useTranslation();
    
        function handleSubmit(event) {
            event.preventDefault();
            console.log('Inviato');
        }

        

const validation = () => {
  if (emailRef.current.value === "") {
    alert('Enter valid email')
  }
}

    
  return (
    <div className='contacts-container' >
      <div className='header'>
        <h1>{t('contactus.h1')}</h1>
        <p>{t('contactus.p')}<div>laurihanstin@gmail.com</div></p>
        
        <img className='image' src='/images/contact/gingerbreads.jpg' alt=''/>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder={t("contactus.name")}/>
        <input ref={emailRef} type="text" placeholder={t("contactus.email")}/><br /> <br />
        <textarea rows="10" className='message' type="text" placeholder={t("contactus.message")}/><br /> <br />
        <button className='button' onClick={validation} type='submit' style={{width: '100px'}} >{t("contactus.send")}</button><br />
        
        </form>
        
    </div>
  )
}

export default Contacts