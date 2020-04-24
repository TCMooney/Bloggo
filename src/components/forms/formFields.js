import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return (
            <div className={`${className} form-input`}>
                <input className='form-input__input'
                    type={type}
                    placeholder={placeholder}
                    {...input}
                />
            </div>
        )
    }
}

export class FormButton extends Component {
    render() {
        const { className, title, type, onClick, input } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className='form-button__button'
                    type={type}
                    {...input}
                    onClick={onClick}>
                    {title}
                </button>
            </div>
        )
    }
}

export class FormTextArea extends Component {
    render() {
        const { className, type, input, placeholder } = this.props;
        return (
            <div className={`${className} form-textarea`}>
                <textarea
                    className='form-textarea__input'
                    type={type}
                    placeholder={placeholder}
                    {...input}
                />
            </div>
        )

    }
}