import React, { Component } from 'react';

export default class PageTitle extends Component {
  render() {
    const { title } = this.props
    return (
      <h2 className='page-title'>{title}</h2>
    )
  }
}