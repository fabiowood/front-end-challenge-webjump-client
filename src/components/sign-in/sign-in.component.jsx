import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./sign-in.styles.scss";

//Components Dependencies

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utilities';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.props.history.push('/');
        this.setState({
          email: '',
          password: '',
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
      <article className="sign-in">
        <h2>Já tenho uma conta!</h2>
        <span>Entre com o seu email e senha</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name='email'
            required
            handleChange={this.handleChange}
            label='email'
          />
          <FormInput
            type="password"
            name='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label='senha'
          />
          <div className='buttons'>
            <CustomButton type="submit" >LOGIN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >LOGIN COM GOOGLE</CustomButton>
          </div>
        </form>
      </article>
    );
  }
}

export default withRouter(SignIn);
