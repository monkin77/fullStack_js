import React, { Component } from 'react';
import HighScore from './HighScore';
import './css/style.css'

class Application extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
            overTen: false,
        })
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false,
        })
    } 

    componentDidUpdate(props, state) {       // state is the previous state before being updated | This method is called every time the state changes
        //console.log("Updated from", state, "to", this.state);
        if (this.state.count > 10 && this.state.count != state.count && !this.state.overTen) {
            this.setState({ overTen: true });
        }
    }

    render() { // render returns HTML, text, variables ...
        let { count } = this.state;

        return (
            <div>
                <h1>You clicked the button {count} times</h1>
                <HighScore overTen={this.state.overTen} onReset={(e) => this.resetCount(e)} />

                <span>
                    <button onClick={() => this.handleClick()}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default Application;