import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormInput, FormButton, FormTextArea } from './formFields';

class NewBlogForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className='new-blog-form' onSubmit={handleSubmit}>
        <Field
          className='new-blog-form__blog-title'
          name='title'
          type='title'
          placeholder='Blog Title'
          component={FormInput} />
        <Field
          className='new-blog-form__content'
          name='content'
          type='content'
          placeholder='Blog Content'
          component={FormTextArea}
        />
        <Field
          className='new-blog-form__tags'
          name='tags'
          type='tags'
          placeholder='Tags'
          component={FormInput}
        />
        <Field
          className='new-blog-form__submit'
          name='submit'
          type='submit'
          title='Submit'
          component={FormButton}
        />

      </form>
    )
  }
}

NewBlogForm = reduxForm({
  form: 'NewBlogForm'
})(NewBlogForm);

export default NewBlogForm;