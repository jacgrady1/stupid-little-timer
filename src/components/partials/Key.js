import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class Key extends Component {
    constructor(props){
        super(props);
        this.handleKeyClick = this.handleKeyClick.bind(this);
    }
    handleKeyClick() {
        var name = this.props.label;
        var audio = new Audio('/audios/' + name + '.mp3');
        audio.play();
    }
    render() {
        return (
            <RaisedButton
                label={this.props.label}
                style={{
                    height: '200px',
                    marginRight: '5px'
                }}
                onClick={this.handleKeyClick}
            >
            </RaisedButton>
        );
    }
}

Key.defaultProps = {
    label: 'this is a default prop'
}

export default Key;
