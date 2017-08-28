import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class Key extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onHandleClick(this.props.value);
    }

    render() {
        if (!this.props.value.half) {
            return (
                <RaisedButton
                    label={this.props.value.name}
                    style={{
                        marginRight: '2px',
                        height: '200px',
                        minWidth: '70px'
                    }}
                    labelStyle={{
                        top: '175px'
                    }}
                    onClick={this.handleClick}
                >
                </RaisedButton>
            );
        } else {
            return (
                <RaisedButton
                    label={this.props.value.name}
                    style={{
                        height: '130px',
                        minWidth: '30px',
                        position: 'relative',
                        left: '-31px',
                        marginRight: '-60px',
                        zIndex:'100'
                    }}
                    buttonStyle={{
                        backgroundColor: 'black'
                    }}
                    labelStyle={{
                        top: '105px',
                        color: 'white'
                    }}
                    onClick={this.handleClick}
                >
                </RaisedButton>
            );
        }

    }
}

Key.defaultProps = {
    name: 'foo'
}

export default Key;
