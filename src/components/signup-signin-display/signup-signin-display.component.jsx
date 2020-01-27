import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isOutsideShopPage } from '../../redux/shop/shop.actions';

import './signup-signin-display.styles.scss';

const SignUpSignInDisplay = ({ isOutsideShopPage }) => {
  return (
    <section className='sign-up-sign-in'>
      <Link to='/sign-in' className='sign-up-sign-in-option' onClick={() => isOutsideShopPage(true)}><b>Acesse sua Conta</b></Link>
      <p>ou</p>
      <Link to='/sign-in' className='sign-up-sign-in-option' onClick={() => isOutsideShopPage(true)}><b>Cadastre-se</b></Link>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  isOutsideShopPage: () => dispatch(isOutsideShopPage(true))
})


export default connect(null, mapDispatchToProps)(SignUpSignInDisplay);