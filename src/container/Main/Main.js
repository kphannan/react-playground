
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
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="card-pf card-pf-accented card-pf-aggregate-status">
                    <h2 className="card-pf-title">
                        <span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">0</span> Ipsum
                    </h2>
                    <div className="card-pf-body">
                        <p className="card-pf-aggregate-status-notifications">
                        <span className="card-pf-aggregate-status-notification"><a href="#" className="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span className="pficon pficon-add-circle-o"></span></a></span>
                        </p>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="card-pf card-pf-accented card-pf-aggregate-status">
                    <h2 className="card-pf-title">
                        <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">20</span> Amet</a>
                    </h2>
                    <div className="card-pf-body">
                        <p className="card-pf-aggregate-status-notifications">
                            <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-error-circle-o"></span>4</a></span>
                            <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-warning-triangle-o"></span>1</a></span>
                        </p>
                    </div>
                </div>

            </div>



        </div>


        <div className="row row-cards-pf">

            <form>
                <div className="form-group has-error">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                    <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                    <span id="helpBlock" className="help-block ">explain the error.</span>
                </div>

                <div className="form-group has-warning">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <span id="helpBlock" className="help-block hide">help text may be set to appear before the field</span>
                </div>

            </form>

                <button type="button" className="btn btn-primary">Default button</button>
                <button type="button" className="btn btn-default" style={{marginLeft: '1em'}}>Default button</button>
                <button type="button" className="btn btn-warning" style={{marginLeft: '1em'}}>Default button</button>

            <form>
                <div className="form-group has-error">
                    <label for="addressLine1Input">Email address</label>
                    <input type="email" className="form-control" id="addressLine1Input" placeholder="Email" />
                    <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                    <span id="helpBlock" className="help-block ">explain the error.</span>
                </div>

                <div className="form-group has-warning">
                    <label for="addressLine2Input">Password</label>
                    <input type="password" className="form-control" id="addressLine2Input" placeholder="Password" />
                    <span id="helpBlock" className="help-block hide">help text may be set to appear before the field</span>
                </div>

            </form>

        </div>

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
