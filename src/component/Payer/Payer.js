import React from 'react';

import SearchFor from '../../component/SearchFor/SearchFor'


// linear-gradient(to bottom,#39a5dc 0,#0088ce 100%)

                  // <td><span class="input-group-addon"><input type="checkbox" aria-label="..." /></span></td>


const Payer = (props) => {

    return (


<div class="panel-group" id="accordion-markup">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion-markup" href="#collapseOne">
          <span class="badge" style={{backgroundColor: '#0088ce', borderRadius: '25px'}}>1</span> Select Payer
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in">
      <div class="panel-body">

        <SearchFor placeholderText={'Search by ID, name'} name={'Account'} label={'{Payer Search}'} />

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Select Payer ID:</h3>
          </div>
          <div class="panel-body">

            <div class="spinner spinner-lg"></div>
            Add paging control to upper right

            <table class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>x</th>
                  <th>ID</th>
                  <th>Payer Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><label class="btn active"><input type="radio" name="options" id="option1" autocomplete="off" checked /></label></td>
                  <td>1</td>
                  <td>Assurant Health</td>
                  <td>345 Anywherebuthere Cove</td>
                  <td>Notacity</td>
                  <td>WA</td>
                  <td>29384</td>
                </tr>
                <tr>
                  <td><label class="btn active"><input type="radio" name="options" id="option2" autocomplete="off" /></label></td>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><label class="btn active"><input type="radio" name="options" id="option3" autocomplete="off" /></label></td>
                  <td>3</td>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
    <ul class="pager">
      <li class="previous" style={{display: 'none'}}>
        <a href="#">
          <span class="i fa fa-angle-left"></span>
          Previous
        </a>
      </li>
      <li class="next">
        <a href="#">
          Next
          <span class="i fa fa-angle-right"></span>
        </a>
      </li>
    </ul>
  </div>



  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion-markup" href="#collapseTwo" class="collapsed">
          <span class="badge" style={{backgroundColor: 'white', color: '#888888', borderRadius: '25px'}}>2</span> Select Fee Schedule
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse">
      <div class="panel-body">
        Donec consequat dignissim neque, sed suscipit quam egestas in. Fusce bibendum laoreet lectus commodo interdum. Vestibulum odio ipsum, tristique et ante vel, iaculis placerat nulla. Suspendisse iaculis urna feugiat lorem semper, ut iaculis risus tempus.


        <SearchFor placeholderText={'Search by ID, name'} name={'Account'} label={'{Payer Search}'} />

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Plan Search:</h3>
          </div>
          <div class="panel-body">
            Add paging control to upper right

            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>x</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>Let\'s Check this out</td>
                  <td>Medicare</td>
                  <td>06/03/2015</td>
                  <td>06/30/2015</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Let\'s Check this out</td>
                  <td>Medicare</td>
                  <td>07/01/2015</td>
                  <td>07/31/2015</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>


      </div>
    </div>
    <ul class="pager">
      <li class="previous">
        <a href="#">
          <span class="i fa fa-angle-left"></span>
          Previous
        </a>
      </li>
      <li class="next">
        <a href="#">
          Next
          <span class="i fa fa-angle-right"></span>
        </a>
      </li>
    </ul>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion-markup" href="#collapseThree" class="collapsed">
          <span class="badge" style={{backgroundColor: 'white', color: '#888888', borderRadius: '25px'}}>3</span> Fee Schedule Effective Dates
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse">
      <div class="panel-body">
        Curabitur nisl quam, interdum a venenatis a, consequat a ligula. Nunc nec lorem in erat rhoncus lacinia at ac orci. Sed nec augue congue, vehicula justo quis, venenatis turpis. Nunc quis consectetur purus. Nam vitae viverra lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue felis. Maecenas in dignissim purus, quis pulvinar lectus. Vivamus euismod ultrices diam, in mattis nibh.
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion-markup" href="#collapseFour" >
          <span class="badge" style={{backgroundColor: 'white', color: '#888888', borderRadius: '25px'}}>4</span> Add Service Codes
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse">
      <div class="panel-body">
        Curabitur nisl quam, interdum a venenatis a, consequat a ligula. Nunc nec lorem in erat rhoncus lacinia at ac orci. Sed nec augue congue, vehicula justo quis, venenatis turpis. Nunc quis consectetur purus. Nam vitae viverra lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue felis. Maecenas in dignissim purus, quis pulvinar lectus. Vivamus euismod ultrices diam, in mattis nibh.
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion-markup" href="#collapseFive" class="collapsed">
          <span class="badge" style={{backgroundColor: 'white', color: '#888888', borderRadius: '25px'}}>5</span> Add Conditions
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse">
      <div class="panel-body">
        Curabitur nisl quam, interdum a venenatis a, consequat a ligula. Nunc nec lorem in erat rhoncus lacinia at ac orci. Sed nec augue congue, vehicula justo quis, venenatis turpis. Nunc quis consectetur purus. Nam vitae viverra lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue felis. Maecenas in dignissim purus, quis pulvinar lectus. Vivamus euismod ultrices diam, in mattis nibh.
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion-markup" href="#collapseSix" class="collapsed">
          <span class="badge" style={{backgroundColor: 'white', color: '#888888', borderRadius: '25px'}}>6</span> Save Schedule
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse">
      <div class="panel-body">
        Curabitur nisl quam, interdum a venenatis a, consequat a ligula. Nunc nec lorem in erat rhoncus lacinia at ac orci. Sed nec augue congue, vehicula justo quis, venenatis turpis. Nunc quis consectetur purus. Nam vitae viverra lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue felis. Maecenas in dignissim purus, quis pulvinar lectus. Vivamus euismod ultrices diam, in mattis nibh.
      </div>
    </div>
  </div>

</div>

)};

export default Payer;




