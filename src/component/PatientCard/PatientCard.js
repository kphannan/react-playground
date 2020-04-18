import React from 'react';


const Drugs = (props) => {

    return (

<div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">{props.label}Last, First</h3>
  </div>
  <div className="panel-body">
    <div className="spinner spinner-lg"></div>
    Panel content
    <div>Pharmacy account....</div><br />
    <div>Primary Physician</div><br />
    <div>Diagnosis</div><br />
    <div>DOB</div><br />
  </div>

    <button type="button" className="btn btn-primary">Default button</button>
    <button type="button" className="btn btn-default" style={{marginLeft: '1em'}}>Default button</button>
    <button type="button" className="btn btn-warning" style={{marginLeft: '1em'}}>Default button</button>

</div>
)};

export default Drugs;




