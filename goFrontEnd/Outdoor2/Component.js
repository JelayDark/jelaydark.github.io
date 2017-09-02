import React from 'react';
import Comment from './Comment'

export default class Comments  extends React.Component {
    render () {
        const commentsData = [
            {
                id: 1,
                author: 'Eugeniy',
                body: 'Some text'
            },
            {
                id: 2,
                author: 'Lisa',
                body: 'Some text'
            },
            {
                id: 3,
                author: 'Pets',
                body: 'Some text'
            },
            {
                id: 4,
                 author: 'Jelay',
                body: 'Some text'
            },
            
        ];
        
        //const list = commentsData.map( element => <li>{element.author}</li> );
        
        return (
            <div>
            <h2>Comments block</h2>
            <Comment author='Eugeniy' body='i love smthin' />
            </div>
        );
    }
};