import React from 'react';


const Navigation = ({p}) => (


<div className="nav-pf-vertical nav-pf-vertical-with-sub-menus nav-pf-persistent-secondary">
  <ul className="list-group">
    <li className="list-group-item">
      <a href="/">
        <span className="fa fa-dashboard" data-toggle="tooltip" title="" data-original-title="Dashboard"></span>
        <span className="list-group-item-value">Dashboard</span>
      </a>
    </li>
    <li className="list-group-item">
      <a href="/profile">
        <span className="fa fa-shield" data-toggle="tooltip" title="" data-original-title="Profile"></span>
        <span className="list-group-item-value">Profile and Communication Preferences</span>

      </a>
    </li>
    <li className="list-group-item active secondary-nav-item-pf" data-target="#ipsum-secondary">
      <a href="/accounts">
        <span className="fa fa-space-shuttle" data-toggle="tooltip" title="" data-original-title="Ipsum"></span>
        <span className="list-group-item-value">Accounts</span>
      </a>

      <div id="-secondary" className="nav-pf-secondary-nav">
          <div className="nav-item-pf-header">
            <a href="/taks" className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
            <span>Tasks</span>
          </div>
          <ul className="list-group">
            <li className="list-group-item active " data-target="#ipsum-intellegam-tertiary">
              <a href="#0">
                <span className="list-group-item-value">Intellegam</span>
              </a>

            </li>
            <li className="list-group-item " data-target="#ipsum-copiosae-tertiary">
              <a href="#0">
                <span className="list-group-item-value">Copiosae</span>
              </a>

            </li>
            <li className="list-group-item " data-target="#ipsum-patrioque-tertiary">
              <a href="#0">
                <span className="list-group-item-value">Patrioque</span>
              </a>

            </li>

          </ul>
      </div>


    </li>
    <li className="list-group-item secondary-nav-item-pf" data-target="#amet-secondary">
      <a href="/payer">
        <span className="fa fa-paper-plane" data-toggle="tooltip" title="" data-original-title="Amet"></span>
        <span className="list-group-item-value">Payer</span>
      </a>

      <div id="amet-secondary" className="nav-pf-secondary-nav">
  <div className="nav-item-pf-header">
    <a href="/payer" className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
    <span>Payer</span>
  </div>
  <ul className="list-group">
    <li className="list-group-item " data-target="#amet-detracto-tertiary">
      <a href="#0">
        <span className="list-group-item-value">Detracto Suscipiantur</span>



      </a>

    </li>
    <li className="list-group-item " data-target="#amet-mediocrem-tertiary">
      <a href="#0">
        <span className="list-group-item-value">Mediocrem</span>



      </a>

    </li>
    <li className="list-group-item " data-target="#amet-corrumpit-tertiary">
      <a href="#0">
        <span className="list-group-item-value">Corrumpit Cupidatat Proident Deserunt</span>



      </a>

    </li>

  </ul>
</div>


    </li>
    <li className="list-group-item">
      <a href="#0">
        <span className="fa fa-graduation-cap" data-toggle="tooltip" title="" data-original-title="Adipscing"></span>
        <span className="list-group-item-value">Adipscing</span>
      </a>
    </li>
    <li className="list-group-item">
      <a href="/tasks">
        <span className="fa fa-gamepad" data-toggle="tooltip" title="" data-original-title="Lorem"></span>
        <span className="list-group-item-value">Tasks</span>
      </a>
    </li>

    <li className="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block">
      <a href="#0">
        <span className="pficon pficon-user" data-toggle="tooltip" title="" data-original-title="User"></span>
        <span className="list-group-item-value dropdown-title">User</span>
      </a>
      <div id="user-secondary" className="nav-pf-secondary-nav">
        <div className="nav-item-pf-header">
          <a href="#0" className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>User</span>
        </div>

        <ul className="list-group">
          <li className="list-group-item">
            <a href="#0">
              <span className="list-group-item-value">Preferences</span>
            </a>
          </li>

          <li className="list-group-item">
            <a href="#0">
              <span className="list-group-item-value">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li className="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block" data-target="#amet-secondary">
      <a href="#0">
        <span className="pficon pficon-help" data-toggle="tooltip" title="" data-original-title="Help"></span>
        <span className="list-group-item-value dropdown-title">Help</span>
      </a>
      <div id="help-secondary" className="nav-pf-secondary-nav">
        <div className="nav-item-pf-header">
          <a href="#0" className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>Help</span>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <a href="#0">
              <span className="list-group-item-value">Help</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#0">
              <span className="list-group-item-value">About</span>
            </a>
          </li>
        </ul>
      </div>
    </li>

  </ul>

</div>
);

export default Navigation;
