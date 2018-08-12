import React from 'react';
import PropTypes from 'prop-types';
import {
  VerticalNav,
  VerticalNavItem,
  VerticalNavSecondaryItem,
  VerticalNavMasthead,
  VerticalNavBrand,
  VerticalNavIconBar,
  Dropdown,
  Icon,
  MenuItem
} from 'patternfly-react';
import pfLogo from 'patternfly/dist/img/logo-alt.svg';
import pfBrand from 'patternfly/dist/img/brand-alt.svg';

//  <h2>Horizontal Nav Bar</h2>

//  <h3>Grid Menu</h3>

//  <h4>Icons</h4>


const vertNavItems = [];

const dropdownComponentClass = props => (
  <li className={props.className}>{props.children}</li>
);


const Launcher = ({p}) => (

      <React.Fragment>
        <VerticalNav persistentSecondary={false}>
          <VerticalNavMasthead>
            <VerticalNavBrand titleImg={pfBrand} iconImg={pfLogo} />
            <VerticalNavIconBar>
              <Dropdown componentClass={dropdownComponentClass} id="help">
                <Dropdown.Toggle
                  className="nav-item-iconic"
                  bsStyle="link"
                  noCaret
                >
                  <Icon type="pf" name="help" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem eventKey="1">Help</MenuItem>
                  <MenuItem eventKey="2">About</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown componentClass={dropdownComponentClass} id="user">
                <Dropdown.Toggle className="nav-item-iconic" bsStyle="link">
                  <Icon type="pf" name="user" />{' '}
                  <span className="dropdown-title">Brian Johnson</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem eventKey="1">Preferences</MenuItem>
                  <MenuItem eventKey="2">Logout</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </VerticalNavIconBar>
          </VerticalNavMasthead>
          {vertNavItems}
          {/* <VerticalNavItem
            key="abc"
            title="Ipsum"
            iconClass="fa fa-dashboard"
            active
            onClick={() => this.navigateTo('/')}
          /> */}
        </VerticalNav>
        {/* {this.renderContent()} */}
      </React.Fragment>
);

export default Launcher;
