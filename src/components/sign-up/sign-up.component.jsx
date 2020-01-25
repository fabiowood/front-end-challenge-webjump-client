// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import "./sign-up.styles.scss";

// //Components Dependencies

// import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
// import { signUpStart } from '../../redux/user/user.actions';
// // import { auth, createUserProfileDocument } from '../../firebase/firebase.utilities'; => replaced by reudx-saga!

// class SignUp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       displayName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     };
//   }

//   // It is necessary to change our handler to 'async', because we will use a method from Firebase, and this is an assyncronous operation (we are calling the Firebase API).

//   handleSubmit = async event => {
//     event.preventDefault();
//     const { signUpStart } =  this.props;
//     const { displayName, email, password, confirmPassword } = this.state;
//     if(password !== confirmPassword) {
//       alert("Password don't match. Try again");
//       return;
//     } else {
//       await signUpStart(email, password, displayName);
//     }
//   }
    
//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
//     return (
//       <article className="sign-up">
//         <h2>I do not have an account!</h2>
//         <span>Sign-up with your email and password</span>
//         <form className='sign-up-form' onSubmit={this.handleSubmit}>
//           <FormInput
//             type="text"
//             value={this.state.displayName}
//             required
//             handleChange={this.handleChange}
//             name='displayName'
//             label='Display Name'
//           />
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
//           <FormInput
//             type="password"
//             value={this.state.confirmPassword}
//             required
//             handleChange={this.handleChange}
//             name='confirmPassword'
//             label='Confirm Password'
//           />
//           <div className='buttons'>
//             <CustomButton type="submit" >SIGN UP</CustomButton>
//           </div>
//         </form>
//       </article>
//     )
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName})),
// })

// export default connect(null, mapDispatchToProps)(SignUp);