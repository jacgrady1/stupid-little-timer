import React, {Component} from 'react';
import './Piano.css';
import Key from './Key';
class Piano extends Component {
    render() {
        return (
            <div className="piano">
                <Key label={'1 C'} />
                <Key label={'2 D'} />
                <Key label={'3 E'} />
                <Key label={'4 F'} />
                <Key label={'5 G'} />
                <Key label={'6 A'} />
                <Key label={'7 B'} />
            </div>
        );
    }
}

export default Piano;
