import React from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.conponent'
import CustomButton from '../custom-buttom/custom-buttom.component'

import {  auth, singInWithGoogle } from '../../firebase/firebase.utils'


class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''});
        } catch(e) {
            alert("faild to login, please check your email or password")
        }
    };

    handleChange = event => {
        const { value, name } = event.target
        this.setState({[name]: value})
    }

    render() {
        const { email, password } = this.state
        return (
            <div className='sing-in'>
                <h2>I already have an account</h2>
                <span>Sing in with your email and passwrod</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={email} handleChange={this.handleChange} label='email' required  />
                    <FormInput name='password' type='password' value={password} handleChange={this.handleChange} label='password' required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sing In</CustomButton>
                        <CustomButton onClick={singInWithGoogle} isGoogleSingIn>Sing In with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingIn