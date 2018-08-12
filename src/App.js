import { Component } from 'react';
import React from 'react';
import Main from './container/Main/Main';
//import Header from './component/Header/Header'
import Masthead   from './component/Masthead/Masthead';
import Navigation from './component/Navigation/Navigation';
import './App.css';
import 'patternfly/dist/css/patternfly.min.css'
import 'patternfly/dist/css/patternfly-additions.min.css'


class App extends Component {
    render() {
        return (
            <div>
                <Masthead />
                <Navigation />
                <Main />
            </div>
        );
    }
}


export default App;
