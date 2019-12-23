import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormInput, FormButton } from './formFields';

class SigninForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            
            <form onSubmit={handleSubmit} className='signin-form'>
            <div className='signin-form__title'>Login</div>
                <Field
                    className='signin-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Your Email'
                    component={FormInput}
                />
                <Field
                    className='signin-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Your Password'
                    component={FormInput}
                />
                <Field
                    className='signin-from__login'
                    name='login'
                    type='submit'
                    title='Login'
                    component={FormButton}
                />
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;