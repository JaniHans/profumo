import React, {useContext} from 'react'
import "./adminpage.css"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AuthContext } from './AuthContext'

function AdminPage() {

  const {t} = useTranslation();
  const {loggedIn, setLoggedIn} = useContext(AuthContext);

  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("token");
  }

  return (
    <div className='main-container'>
      {loggedIn && <Link to={'/admin/maintainproducts'}><button>{t('navigation.maintainproducts')}</button></Link>}
      {loggedIn && <Link to={'/admin/maintainschedule'}><button>{t('navigation.maintainschedule')}</button></Link>}
      
      {loggedIn === false ?
      <>
      <Link to={'/admin/login'}><button>{t('auth.login')}</button></Link>
      
      </>
      :
      <button onClick={logout}>{t('auth.logout')}</button>
    }
    </div>
  )
}

export default AdminPage