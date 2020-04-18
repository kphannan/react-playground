import ReactDOM from 'react-dom';
// import React, { Component } from 'react'
import {Provider} from 'react-redux';
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';

import App   from './App';

import Masthead   from './component/Masthead/Masthead';
import Navigation from './component/Navigation/Navigation';


import Accounts from './component/Accounts/Accounts';
import Broadcasts from './component/Broadcasts/Broadcasts';
import CARETrack from './component/CARETrack/CARETrack';
import Drugs from './component/Drugs/Drugs';
import Payer from './component/Payer/Payer';
import Physicians from './component/Physicians/Physicians';
import Profile from './component/Profile/Profile';
import Tasks from './component/Tasks/Tasks';
import Home from './component/Home/Home';
import Login  from './component/Login/Login';
import Logout from './component/Login/Login';
import AllPatients from './component/PatientCard/PatientCard';
// import {} from './component//';
// import {} from './component//';
// import {} from './component//';

import './index.css';
import 'patternfly/dist/css/patternfly.min.css'
import 'patternfly/dist/css/patternfly-additions.min.css'
//import 'ux-styleguide/dist/ux-styleguide.min.css';

const store = configureStore();

ReactDOM.render(
    <Masthead />,
    document.getElementById('masthead'));

ReactDOM.render(
    <Navigation />,
    document.getElementById('navbar'));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='container-fluid container-cards-pf container-pf-nav-pf-vertical nav-pf-persistent-secondary'>
                <Route exact path="/"        component={Home} />
                <Route path="/payer"         component={Payer} />
                <Route path="/accounts"      component={Accounts} />
                <Route path="/broadcasts"    component={Broadcasts} />
                <Route path="/CARETrack"     component={CARETrack} />
                <Route path="/drugs"         component={Drugs} />
                <Route path="/physicians"    component={Physicians} />
                <Route path="/profile"       component={Profile} />
                <Route path="/tasks"         component={Tasks} />
                <Route path="/login"         component={Login} />
                <Route path="/logout"        component={Logout} />
                <Route path="/all-patients"  component={AllPatients} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('react-container'));

// registerServiceWorker();



