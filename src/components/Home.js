import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Timer from './partials/Timer';
import Piano from './partials/Piano';

const Home = () => (
    <Tabs>
        <Tab label="Piano" >
            <Piano />
        </Tab>
        <Tab label="Timer" >
            <Timer />
        </Tab>

    </Tabs>
);

export default Home;
