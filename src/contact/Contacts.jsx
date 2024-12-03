import React from 'react'
import './contacts.css'
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

    function Contacts() { 

      const {t} = useTranslation();
    
        function handleSubmit(event) {
            event.preventDefault();
            console.log('Inviato');
        }

    
  return (
    <div>
        <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder={t("contactus.name")}/><br />
        <input type="text" placeholder={t("contactus.email")}/><br />
        <input type="text" placeholder={t("contactus.message")}/><br /> <br />
        <Button type='submit' style={{width: '100px'}} variant="primary">{t("contactus.send")}</Button><br />
        </form>
        
    </div>
  )
}

export default Contacts