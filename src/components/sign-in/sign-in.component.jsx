// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import "./sign-in.styles.scss";

// //Components Dependencies

// import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
// // import { auth , signInWithGoogle } from '../../firebase/firebase.utilities';
// import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

// class SignIn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   // It is necessary to change our handler to 'async', because we will use a method from Firebase, and this is an assyncronous operation (we are calling the Firebase API).

//   handleSubmit = async event => {
//     event.preventDefault();
//     const { emailSignInStart } = this.props;
//     const { email, password } = this.state;
//     await emailSignInStart(email, password);
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
//     const { googleSignInStart } = this.props;
//     return (
//       <article className="sign-in">
//         <h2>I already have an account!</h2>
//         <span>Sign-in with your email and password</span>
//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             type="email"
//             value={this.state.email}
//             required
//             handleChange={this.handleChange}
//             name='email'
//             label='Email'
//           />
//           <FormInput
//             type="password"
//             value={this.state.password}
//             required
//             handleChange={this.handleChange}
//             name='password'
//             label='Password'
//           />
//           <div className='buttons'>
//             <CustomButton type="submit" >SIGN IN</CustomButton>
//             <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
//           </div>
//         </form>
//       </article>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
// })

// export default connect(null, mapDispatchToProps)(SignIn);
