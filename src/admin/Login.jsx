import Button from 'react-bootstrap/Button';
import React, {useRef, useContext} from 'react'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from './AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



function Login() {

    const VALID_USERNAME = "laurihanstin@gmail.com";
    const VALID_PASSWORD = "55UP75";

    const {t} = useTranslation();

    const userName = useRef()
    const userPassWord = useRef()
    const {setLoggedIn} = useContext(AuthContext);

    const sisseLogimine = () => {
        if (userName.current.value !== VALID_USERNAME || userPassWord.current.value !== VALID_PASSWORD){
            toast.error(t('auth.invalidCredentials'));
            return;
        }
        setLoggedIn(true);
        sessionStorage.setItem("token", "suvaline-token-mida-tegelikult-väljastab-back-end")
        toast.success(t('auth.validCredentials'));

    }

  return (
    <div className='main-container'>

        <input placeholder={t('auth.username')} ref={userName}></input><br />
        <input placeholder={t('auth.password')}ref={userPassWord}></input><br />
        <Link to={'/admin/maintainproducts'}><Button onClick={sisseLogimine} variant='warning'>{t('auth.login')}</Button></Link>
        <ToastContainer
         position="bottom-right"
         autoClose={4000}
         theme="dark"
        />
    </div>
  )
}

export default Login