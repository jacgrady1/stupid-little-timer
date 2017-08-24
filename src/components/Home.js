import React, {Component} from 'react';
import Timer from './partials/Timer';
import Piano from './partials/Piano';
import {Tabs, Tab} from 'material-ui/Tabs';
import './Home.css';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Tabs>
                    <Tab label="Piano">
                        <Piano />
                    </Tab>
                    <Tab label="Timer">
                        <Timer />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default Home;
