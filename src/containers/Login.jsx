import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    setValues({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setValues({ ...form, remember: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = { email: form.email, remember: form.remember };
    props.loginRequest(dataToSend);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>

        <form className='login__container--form' onSubmit={handleSubmit}>
          <input type='email' name='email' className='input' placeholder='Correo' onChange={handleChange} required />
          <input type='password' name='password' className='input' placeholder='Contraseña' onChange={handleChange} required />

          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' name='remember' onClick={handleCheck} />
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
};

const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
