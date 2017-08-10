import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = this.clearState();
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    clearState() {
        return {
            currentSec: 30,
            isStartDisabled: false
        };
    }
    tick() {
        let second = this.state.currentSec - 1;
        this.setState({
            currentSec: second
        });
        if (second === 0) {
            clearInterval(this.interval);
        }
    }
    handleResetClick() {
        clearInterval(this.interval);
        this.setState(this.clearState());
    }
    handleStartClick() {
        this.interval = setInterval(()=> this.tick(), 1000);
        // disable start button
        this.setState({
            isStartDisabled: true
        });
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Stupid Little Timer</h2>
                </div>
                <div className="App-body">
                    <div className="Show-sec">{this.state.currentSec}</div>
                    <button
                        className="Timer-button"
                        disabled={this.state.isStartDisabled}
                        onClick={this.handleStartClick}>
                        start
                    </button>
                    <button
                        className="Timer-button"
                        onClick={this.handleResetClick}>
                        reset
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
