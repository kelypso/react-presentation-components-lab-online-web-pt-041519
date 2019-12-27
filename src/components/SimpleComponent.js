import React, { Component } from 'react'

export default class SimpleComponent extends Component {

    state = {
        mood: 'happy'
    }

    render () {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }

    handleClick = () => {
        this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
    }

}