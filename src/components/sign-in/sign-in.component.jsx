import React from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.conponent'
import CustomButton from '../custom-buttom/custom-buttom.component'


class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sing-in'>
                <h2>I already have an account</h2>
                <span>Sing in with your email and passwrod</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required  />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
                    <CustomButton type='submit'>Sing In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SingIn