import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogItem extends Component {
    render() {
        const { title, date, _id } = this.props;
        const { name } = this.props.userId;
        const parsedDate = new Date(date);
        return (
            <div key={_id} className='blog-item-wrapper'>
                <Link className='blog-item-title' to={`/blog/${_id}`}>{title}</Link>
                <div className='blog-item-author'>
                    {`by: ${name}`}
                </div>
                <div className='blog-item-date'>
                    <div>{parsedDate.getMonth() + 1 + '/' + parsedDate.getDate() + '/' + parsedDate.getFullYear()}</div>
                </div>
            </div>
        )
    }
}

export default BlogItem;