import React from 'react';
import './signup-signin.styles.scss';

// Components Dependencies

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignUpSignInPage = () => {
  return (
    <section className='sign-up-sign-in'>
      <SignIn />
      <SignUp />
    </section>
  )
}

export default SignUpSignInPage;