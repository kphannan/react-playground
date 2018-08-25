import React from 'react';

// import Login from '../../component/Login/Login';

const Login = (props) => {

    return (
<div>


            <form className="form-horizontal">   { /*<!-- goofing around --> */}
                <div className="row form-group">
                    <label className="col-sm-2 control-label" for="inputUserName">Username</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputUserName" placeholder="Username" />
                    </div>
                    <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                    <span id="helpBlock" className="help-block hide">explain the error.</span>
                </div>

                <div className="row form-group">
                    <label className="col-sm-2 control-label" for="exampleInputPassword1">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <span id="helpBlock" className="help-block hide">help text may be set to appear before the field</span>
                </div>

                <div className="row">
                    <div className="col-sm-2">
                    </div>

                    <div className="col-sm-10">
                    <button type="button" className="btn btn-default btn-xs " style={{marginLeft: '1em'}}>Forgot Password</button>
                    <button type="button" className="btn btn-default btn-xs" style={{marginLeft: '1em'}} href="register.jsp">Register</button>
                    <button type="button" className="btn btn-default btn-xs" style={{marginLeft: '1em'}} href="contact.jsp">Contact Support</button>
                    <button type="button" className="btn btn-primary btn-lg pull-right" style={{marginLeft: '1em'}}>Login</button>
                    </div>
                </div>
            </form>



    <div className="panel panel-default">   { /*<!-- Login --> */}
      <div className="panel-heading">
      <div className="panel-title">
        <h1>Icon</h1>
        <h2 className="pull-right">Login</h2>
      </div>
      </div>

      <div className="panel-body">

            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label" for="inputUserName">Username</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputUserName" placeholder="Username" />
                    </div>
                    <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                    <span id="helpBlock" className="help-block hide">explain the error.</span>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label" for="exampleInputPassword1">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <span id="helpBlock" className="help-block hide">help text may be set to appear before the field</span>
                </div>

            </form>

                <div className="col-sm-2">
                </div>

                <div className="col-sm-10">
            <button type="button" className="btn btn-default btn-xs " style={{marginLeft: '1em'}}>Forgot Password</button>
            <button type="button" className="btn btn-default btn-xs" style={{marginLeft: '1em'}} href="register.jsp">Register</button>
            <button type="button" className="btn btn-default btn-xs" style={{marginLeft: '1em'}} href="contact.jsp">Contact Support</button>
            <button type="button" className="btn btn-primary btn-lg pull-right" style={{marginLeft: '1em'}}>Login</button>
                </div>
        </div>
    </div>



    <div className="panel panel-default">   { /*<!-- Registration --> */}
      <div className="row panel-heading">
          <div className="panel-title">
            <h1 className="col-sm-2">Icon</h1>
            <h2 className="col-sm-2 pull-right">Registration</h2>
          </div>
      </div>

      <div className="container">
          <div className="panel-body">
                <form className="form-horizontal">

                    <div className="row">
                    <div className="form-group col-sm-5">
                        <label className="control-label" for="inputUserName">Requested Username</label>
                        <input type="text" className="form-control" id="inputUserName" placeholder="Requested username" />
                    </div>

                    <div className="form-group col-sm-2" />

                    <div className="form-group col-sm-5">
                        <label className="control-label" for="inputUserType">User Type</label>
                        <input type="email" className="form-control" id="inputUserType" />
                    </div>
                    </div>



                    <div className="row">
                    <div className="form-group col-sm-5">
                        <label for="inputFirstName">Name</label>
                        <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" />
                        <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                        <span id="helpBlock" className="help-block hide">explain the error.</span>
                    </div>

                    <div className="form-group col-sm-2" />

                    <div className="form-group col-sm-5">
                        <label for="inputFirstName">&nbsp;</label>
                        <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" />
                        <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                        <span id="helpBlock" className="help-block hide">explain the error.</span>
                    </div>
                    </div>





                    <div className="panel panel-default col-sm-12"> { /*<!-- Locations --> */}
                      <div className="panel-heading">
                          <div className="panel-title">
                            <h2>Locations</h2>
                          </div>
                      </div>

                      <div className="panel-body">
                      <p>To add your location(s), type in the name of a clinic and select the appropriate item on the list.  To remove and item from your list, select it again in the right column.</p>
                        <div className="form-group col-sm-6">
                            <label for="registeredClinicSearch">Search</label>
                            <input type="email" className="form-control" id="registeredClinicSearch" placeholder="Search" />
                            <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                            <span id="helpBlock" className="help-block hide">explain the error.</span>
                        </div>
                        <div className="col-sm-6" />

                        <div className="form-group col-sm-5">
                            <label for="registeredClinicSearch">List of Enrolled Locations</label>
                            <textarea rows="5" type="text" className="form-control" id="registeredClinicSearch" placeholder="Search" />
                            <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                            <span id="helpBlock" className="help-block hide">explain the error.</span>
                        </div>
                        <div className="col-sm-1" />
                        <div className="form-group col-sm-5">
                            <label for="registeredClinicSearch">Your Selected Locations</label>
                            <textarea rows="5" type="text" className="form-control" id="registeredClinicSearch" placeholder="Search" />
                            <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                            <span id="helpBlock" className="help-block hide">explain the error.</span>
                        </div>
                      </div>
                    </div>



                    <div className="form-group col-sm-12">
                        <label for="inputAccessReason">Reason for Access</label>
                        <textarea type="textArea" rows="5" className="form-control" id="inputAccessReason" />
                        <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                        <span id="helpBlock" className="help-block hide">explain the error.</span>
                    </div>

                </form>
          </div>
      </div>
    </div>


    <div className="panel panel-default">   { /*<!-- Reset Password --> */}
      <div className="panel-heading row">
          <div className="panel-title">
            <h1 className="col-sm-2">Icon</h1>
            <h2 className="col-sm-3 pull-right">Reset Password</h2>
          </div>
      </div>

      <div className="panel-body">
      </div>
    </div>


    <div className="panel panel-default">   { /*<!-- Reset password confirmation --> */}
      <div className="panel-heading row">
          <div className="panel-title">
            <h1 className="col-sm-2">Icon</h1>
            <h2 className="col-sm-3 pull-right">Reset successful</h2>
          </div>
      </div>

      <div className="panel-body row">
      </div>
    </div>

    <div className="panel panel-default">   { /*<!--  --> */}
      <div className="panel-heading">
          <div className="panel-title">
            <h1>Panel Icon</h1>
            <h2 className="pull-right">Panel Label</h2>
          </div>
      </div>

      <div className="panel-body">
      <p>Panel Content</p>
      </div>
    </div>
</div>

)};

export default Login;




