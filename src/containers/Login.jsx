import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' required />
        <input className='input' type='password' placeholder='Contraseña' required />
        <div className='login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Recuérdame
          </label>
        </div>

        <button type='submit' className='button'>Iniciar sesión</button>
      </form>

      <Link to='/'>Olvidé mi contraseña</Link>

      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='' />
          &nbsp;Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='' />
          &nbsp;Inicia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta&nbsp;
        <Link to='/register'>Regístrate</Link>
      </p>
    </section>
  </section>
);

export default Login;
