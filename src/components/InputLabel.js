import React, { Component } from 'react';

export default class InputLabel extends Component {
  render() {
    const { labelTitle } = this.props;
    return (
      <label className='input-label'>{labelTitle}</label>
    )
  }
}