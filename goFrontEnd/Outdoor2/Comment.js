import React from 'react';
export default class Comment  extends React.Component {
    render () {
        const list = commentsData.map( element => <li>{element.author}</li> );
        
        return ( <div> 
                                      <h1> { this.props.author } </h1>
                                      <p> { this.props.body } </p>
                                      </div>
                                     
            )
    }
};