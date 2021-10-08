import React, { Component } from 'react';
import './images.css'

class Images extends React.Component {

    state = {
        src : 'https://bit.ly/3Ad70PZ'
    };

    render() { 
        return <img src={this.state.src}/>;
    }
}
 
export default Images;