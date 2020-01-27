import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./sign-up.styles.scss";

//Components Dependencies

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utilities';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword) {
      alert("Password don't match. Try again");
      return;
    }
    
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, { displayName } );
        this.props.history.push('/');
        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        })
      }
      catch(error) {
        console.log(error);
      }
   };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <article className="sign-up">
        <h2>Eu não tenho uma conta!</h2>
        <span>Crie uma conta com o seu email e senha</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={this.state.displayName}
            required
            handleChange={this.handleChange}
            name='displayName'
            label='Nome Completo'
          />
          <FormInput
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            name='email'
            label='Email'
          />
          <FormInput
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            name='password'
            label='Senha'
          />
          <FormInput
            type="password"
            value={this.state.confirmPassword}
            required
            handleChange={this.handleChange}
            name='confirmPassword'
            label='Confirmar Senha'
          />
          <div className='buttons'>
            <CustomButton type="submit">CRIAR CONTA</CustomButton>
          </div>
        </form>
      </article>
    )
  }
}

export default withRouter(SignUp);