import React from 'react';


const Navigation = ({p}) => (


<div class="nav-pf-vertical nav-pf-vertical-with-sub-menus nav-pf-persistent-secondary">
  <ul class="list-group">
    <li class="list-group-item">
      <a href="#0">
        <span class="fa fa-dashboard" data-toggle="tooltip" title="" data-original-title="Dashboard"></span>
        <span class="list-group-item-value">Dashboard</span>
      </a>
    </li>
    <li class="list-group-item">
      <a href="#0">
        <span class="fa fa-shield" data-toggle="tooltip" title="" data-original-title="Dolor"></span>
        <span class="list-group-item-value">Dolor</span>

      </a>
    </li>
    <li class="list-group-item active secondary-nav-item-pf" data-target="#ipsum-secondary">
      <a href="#0">
        <span class="fa fa-space-shuttle" data-toggle="tooltip" title="" data-original-title="Ipsum"></span>
        <span class="list-group-item-value">Ipsum</span>
      </a>

      <div id="-secondary" class="nav-pf-secondary-nav">
          <div class="nav-item-pf-header">
            <a href="#0" class="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
            <span>Ipsum</span>
          </div>
          <ul class="list-group">
            <li class="list-group-item active " data-target="#ipsum-intellegam-tertiary">
              <a href="#0">
                <span class="list-group-item-value">Intellegam</span>
              </a>

            </li>
            <li class="list-group-item " data-target="#ipsum-copiosae-tertiary">
              <a href="#0">
                <span class="list-group-item-value">Copiosae</span>
              </a>

            </li>
            <li class="list-group-item " data-target="#ipsum-patrioque-tertiary">
              <a href="#0">
                <span class="list-group-item-value">Patrioque</span>
              </a>

            </li>

          </ul>
      </div>


    </li>
    <li class="list-group-item secondary-nav-item-pf" data-target="#amet-secondary">
      <a href="#0">
        <span class="fa fa-paper-plane" data-toggle="tooltip" title="" data-original-title="Amet"></span>
        <span class="list-group-item-value">Amet</span>
      </a>

      <div id="amet-secondary" class="nav-pf-secondary-nav">
  <div class="nav-item-pf-header">
    <a href="#0" class="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
    <span>Amet</span>
  </div>
  <ul class="list-group">
    <li class="list-group-item " data-target="#amet-detracto-tertiary">
      <a href="#0">
        <span class="list-group-item-value">Detracto Suscipiantur</span>



      </a>

    </li>
    <li class="list-group-item " data-target="#amet-mediocrem-tertiary">
      <a href="#0">
        <span class="list-group-item-value">Mediocrem</span>



      </a>

    </li>
    <li class="list-group-item " data-target="#amet-corrumpit-tertiary">
      <a href="#0">
        <span class="list-group-item-value">Corrumpit Cupidatat Proident Deserunt</span>



      </a>

    </li>

  </ul>
</div>


    </li>
    <li class="list-group-item">
      <a href="#0">
        <span class="fa fa-graduation-cap" data-toggle="tooltip" title="" data-original-title="Adipscing"></span>
        <span class="list-group-item-value">Adipscing</span>
      </a>
    </li>
    <li class="list-group-item">
      <a href="#0">
        <span class="fa fa-gamepad" data-toggle="tooltip" title="" data-original-title="Lorem"></span>
        <span class="list-group-item-value">Lorem</span>
      </a>
    </li>

    <li class="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block">
      <a href="#0">
        <span class="pficon pficon-user" data-toggle="tooltip" title="" data-original-title="User"></span>
        <span class="list-group-item-value dropdown-title">User</span>
      </a>
      <div id="user-secondary" class="nav-pf-secondary-nav">
        <div class="nav-item-pf-header">
          <a href="#0" class="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>User</span>
        </div>

        <ul class="list-group">
          <li class="list-group-item">
            <a href="#0">
              <span class="list-group-item-value">Preferences</span>
            </a>
          </li>

          <li class="list-group-item">
            <a href="#0">
              <span class="list-group-item-value">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li class="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block" data-target="#amet-secondary">
      <a href="#0">
        <span class="pficon pficon-help" data-toggle="tooltip" title="" data-original-title="Help"></span>
        <span class="list-group-item-value dropdown-title">Help</span>
      </a>
      <div id="help-secondary" class="nav-pf-secondary-nav">
        <div class="nav-item-pf-header">
          <a href="#0" class="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>Help</span>
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <a href="#0">
              <span class="list-group-item-value">Help</span>
            </a>
          </li>
          <li class="list-group-item">
            <a href="#0">
              <span class="list-group-item-value">About</span>
            </a>
          </li>
        </ul>
      </div>
    </li>

  </ul>

</div>
);

export default Navigation;
