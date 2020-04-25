import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import classes from './App.module.css'
import Cockpit from '../components/cockpit/Cockpit'
/* import MetaTags from 'react-meta-tags'; */

class App extends Component {
    state = {}
    render() {
        console.log('[App.js] ' + classes.App)
        return (
             <div className={classes.html}>
            {/*  <MetaTags> */}
                    <title>Daniel Ben Shloosh</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

                {/* </MetaTags> */}
                <Cockpit></Cockpit>
              </div>
        );
    }
}

export default App;
