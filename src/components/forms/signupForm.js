import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormInput, FormButton } from './formFields';

class SignupForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className='signup-form' onSubmit={handleSubmit}>
                <div className='signup-form__title'>Signup</div>
                <Field
                    className='signup-form__name'
                    name='name'
                    type='name'
                    title='Name'
                    placeholder='Name'
                    component={FormInput}
                />
                <Field
                    className='signup-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    component={FormInput}
                />
                <Field
                    className='signup-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    component={FormInput}
                />
                <Field
                    className='signup-form__confirm'
                    name='password2'
                    type='password'
                    title='Confirm Password'
                    placeholder='Confirm Password'
                    component={FormInput}
                />
                <Field
                    className='signup-form__button'
                    name='signup'
                    type='submit'
                    title='Signup'
                    component={FormButton}
                />
            </form>
        )
    }
}

SignupForm = reduxForm({
    form: 'SignupForm'
})(SignupForm);