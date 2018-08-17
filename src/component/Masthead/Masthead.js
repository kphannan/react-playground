import React from 'react';

import pfLogo from 'patternfly/dist/img/logo-alt.svg';
import pfBrand from 'patternfly/dist/img/brand-alt.svg';



const Masthead = ({p}) => (

    <nav className="navbar navbar-pf-vertical">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="/" className="navbar-brand">
          <img className="navbar-brand-icon" src={pfLogo} alt=""/>
          <img className="navbar-brand-name" src={pfBrand} alt="PatternFly Enterprise Application" />
        </a>
      </div>

      <nav className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right navbar-iconic navbar-utility">

          <li className="dropdown">
            <button className="btn btn-link dropdown-toggle nav-item-iconic" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span title="Help" className="fa pficon-help"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#0">Help</a></li>
              <li><a href="#0">About</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <button className="btn btn-link dropdown-toggle nav-item-iconic" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span title="Username" className="fa pficon-user"></span>
              <span className="dropdown-title">
                Brian Johnson <span className="caret"></span>
              </span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><a href="#0">Preferences</a></li>
              <li><a href="#0">Logout</a></li>
            </ul>
          </li>
        </ul>
      </nav>

    </nav>
);

export default Masthead;
