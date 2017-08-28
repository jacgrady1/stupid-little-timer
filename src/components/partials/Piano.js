import React, {Component} from 'react';
import Key from './Key';
import KeyConstants from '../../config/KeyConstants'
import NotesController from './NotesController';
import _ from 'lodash';
class Piano extends Component {
    constructor(props){
        super(props);
        this.state = {
            note: null
        };
        this.handlePianoKeyPress = this.handlePianoKeyPress.bind(this);
        this.handlePianoKeyClick = this.handlePianoKeyClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keypress', this.handlePianoKeyPress);
    }

    componentWillUnMount() {
        window.removeEventListener('keypress', this.handlePianoKeyPress);
    }

    handlePianoKeyPress(e) {
        const keyBoardKey =  e.key
        const value = _.find(KeyConstants, {keyBoardKey: keyBoardKey});
        // TODO trigger ripple effect here
        if (value) {
            this.handleMusicPlay(value);
        }
    }

    handlePianoKeyClick(value) {
        this.handleMusicPlay(value);
    }

    handleMusicPlay(value) {
        const note = value.name;
        // TODO: to fix chrome Audio bug
        const audio = new Audio('/piano_ogg/'+ note+'.ogg');
        audio.play();
    }

    render() {
        return (
            <div className="Piano">
                <NotesController />
                {KeyConstants.map((key, idx)=> {
                    return <Key key={idx} value={key} onHandleClick={this.handlePianoKeyClick}/>
                })}
            </div>
        );
    }
}

export default Piano;
