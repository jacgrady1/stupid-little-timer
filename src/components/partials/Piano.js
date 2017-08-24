import React, {Component} from 'react';
import Key from './Key';
class Piano extends Component {
    constructor(props){
        super(props);
        this.handlePianoKeyDown = this.handlePianoKeyDown.bind(this);
        this.handlePianoKeyClick = this.handlePianoKeyClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handlePianoKeyDown);
    }

    componentWillUnMount() {
        window.removeEventListener('keydown', this.handlePianoKeyDown);
    }

    handlePianoKeyDown(e) {
        const note = e.keyCode - 48;
        if (note < 8 && note > 0) {
            this.handleMusicPlay(note);
        }
    }

    handlePianoKeyClick(name) {
        this.handleMusicPlay(name);
    }

    handleMusicPlay(note) {
        const audio = new Audio('/audios/' + note + '.mp3');
        audio.play();
    }

    render() {
        return (
            <div className="Piano">
                <Key name={'1'} onHandleClick={this.handlePianoKeyClick}/>
                <Key name={'2'} onHandleClick={this.handlePianoKeyClick}/>
                <Key name={'3'} onHandleClick={this.handlePianoKeyClick}/>
                <Key name={'4'} onHandleClick={this.handlePianoKeyClick}/>
                <Key name={'5'} onHandleClick={this.handlePianoKeyClick}/>
                <Key name={'6'} onHandleClick={this.handlePianoKeyClick}/>
                <Key name={'7'} onHandleClick={this.handlePianoKeyClick}/>
            </div>
        );
    }
}

export default Piano;
