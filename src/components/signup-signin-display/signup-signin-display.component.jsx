import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isOutsideShopPage } from '../../redux/shop/shop.actions';
import { auth } from '../../firebase/firebase.utilities';

import './signup-signin-display.styles.scss';

const SignUpSignInDisplay = ({ isOutsideShopPage, currentUser }) => {
  return (
    <section className='sign-up-sign-in'>
        {
          currentUser ?

            <Link to='/sign-in' className='sign-up-sign-in-option' onClick={() => {
              isOutsideShopPage(false);
              auth.signOut();
              }}>
            Sair
            </Link> 
            :
            <Fragment>
              <Link to='/sign-in' className='sign-up-sign-in-option' onClick={() => isOutsideShopPage(true)}><b>Acesse sua Conta</b></Link>
              <p>ou</p>
              <Link to='/sign-in' className='sign-up-sign-in-option' onClick={() => isOutsideShopPage(true)}><b>Cadastre-se</b></Link>
            </Fragment>
        }
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  isOutsideShopPage: () => dispatch(isOutsideShopPage(true))
})


export default withRouter(connect(null, mapDispatchToProps)(SignUpSignInDisplay));