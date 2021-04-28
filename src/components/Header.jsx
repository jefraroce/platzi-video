import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../services/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIconImage from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;

  const userIcon = () => {
    if (user.email) {
      return <img src={gravatar(user.email)} alt='' />;
    }

    return <img src={userIconImage} alt='' />;
  };

  const userMenu = () => {
    if (user.email) {
      return (
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar Sesión</a></li>
        </ul>
      );
    }

    return (
      <ul>
        <li><Link to='/login'>Iniciar Sesión</Link></li>
        <li><Link to='/register'>Registrarse</Link></li>
      </ul>
    );
  };

  return (
    <header className='header'>
      <Link className='header__img' to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {userIcon()}
          <p>{user.email || 'Perfil'}</p>
        </div>

        {userMenu()}
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(Header);
