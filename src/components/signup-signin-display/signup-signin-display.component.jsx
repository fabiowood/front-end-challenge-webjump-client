import React from 'react';
import { Link } from 'react-router-dom';
import './signup-signin-display.styles.scss';

const SignUpSignInDisplay = () => {
  return (
    <section className='sign-up-sign-in'>
      <Link to='/sign-in' className='sign-up-sign-in-option'><b>Acesse sua Conta</b></Link>
      <p>ou</p>
      <Link to='/sign-in' className='sign-up-sign-in-option'><b>Cadastre-se</b></Link>
    </section>
  )

}

export default SignUpSignInDisplay;