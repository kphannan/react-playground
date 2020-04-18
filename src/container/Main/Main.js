
import React, { Component } from 'react';

// import { Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
// import {
//     // MemoryRouter as Router,
//     Route,
//     Switch,
//     // Link
// } from 'react-router-dom';

import SearchFor from '../../component/SearchFor/SearchFor'
import TaskList from '../../component/TaskList/TaskList'
import Payer from '../../component/Payer/Payer'

import './Main.css';

// import Homepage from '../Homepage/Homepage';
// import ConnectedRoster, {Roster} from '../Roster/roster'
// import ConnectedRoster from '../Roster/roster';
// import RosterList from '../Roster/RosterList';
// import AddRosterEntry from '../Roster/AddRosterEntry';

// <Route path='/applications/new' component={ AddApplicationPage }/>
// <Route path='/roster' render={ props => <MotivePower foo="here" {...props}/> } />
//            <div className='cards-pf'>



const Main = ({p}) => (

    <div className='container-fluid container-cards-pf container-pf-nav-pf-vertical nav-pf-persistent-secondary'>




        <div className="row row-cards-pf">
        </div>



        <SearchFor placeholderText={'Search by Account Name'} name={'Account'} label={'Account'} />
        <SearchFor placeholderText={'Search by Brand Name or Generic Name'} name={'Drug'} label={'Drug/NDC'}/>
        <SearchFor placeholderText={'Search by NPI or Last Name'} name={'Physician'} label={'Physicians'}/>

        <TaskList  label={'Past Due Tasks'} tasks={[]} />
        <TaskList  label={'Today\'s Tasks'} tasks={[]} />
        <TaskList  label={'Future Tasks'}   tasks={[]} />

        <Payer  label={'Payer'}   tasks={[]} />

    </div>
);

export default Main;
