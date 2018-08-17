import React from 'react';


const Broadcasts = (props) => {

    return (

<div>
   <h1>Broadcasts header</h1>
   <p>Lorem ipsum</p>


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


</div>

)};

export default Broadcasts;




