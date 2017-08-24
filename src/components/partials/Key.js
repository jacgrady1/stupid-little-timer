import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class Key extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const name = this.props.name;
        this.props.onHandleClick(name);
    }

    render() {
        return (
            <RaisedButton
                label={this.props.name}
                style={{
                    marginRight: '5px',
                    height: '200px'
                }}
                onClick={this.handleClick}
            >
            </RaisedButton>
        );
    }
}

Key.defaultProps = {
    name: 'foo'
}

export default Key;
