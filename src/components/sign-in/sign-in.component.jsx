import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

export default class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }
    render(){
        return(
            <div className='sign-in'>
                <div className='head'>
                      <h2> I already have an account</h2>
                      <span>Sign in with your email and password</span>
                </div>
              
                <form onSubmit={this.handleSubmit} className='form'>
                    <FormInput name="email" type="email" label="Email" value={this.state.email} required handleChange={this.handleChange} />
                    <FormInput name="password" type="password" label='Password' value={this.state.password} handleChange={this.handleChange}/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }

}
