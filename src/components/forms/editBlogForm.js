import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormInput, FormButton, FormTextArea } from './formFields';

class EditBlogForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className='edit-blog-form' onSubmit={handleSubmit}>
                <Field
                    className='edit-blog-form__blog-title'
                    name='title'
                    type='title'
                    title='Blog Title'
                    placeholder='Blog Title'
                    component={FormInput} />
                <Field
                    className='edit-blog-form__content'
                    name='content'
                    type='content'
                    title='Blog Content'
                    placeholder='Blog Content'
                    component={FormTextArea}
                />
                <Field
                    className='edit-blog-form__tags'
                    name='tags'
                    type='tags'
                    title='tags'
                    placeholder='Tags'
                    component={FormInput}
                />
                <Field
                    className='edit-blog-form__submit'
                    name='submit'
                    type='submit'
                    title='Submit'
                    component={FormButton}
                />
                <Field
                    className='edit-blog-form__cancel'
                    name='cancel'
                    type='button'
                    title='Cancel'
                    component={FormButton}
                />

            </form>
        )
    }
}

EditBlogForm = reduxForm({
    form: 'EditBlogForm'
})(EditBlogForm);

export default EditBlogForm;