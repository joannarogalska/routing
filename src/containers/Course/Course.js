import React, { Component } from 'react';

class Course extends Component {
    render () {
        console.log('helołłł');
        return (
            <div>
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the Course with ID: {this.props.id}</p>
            </div>
        );
    }
}

export default Course;
