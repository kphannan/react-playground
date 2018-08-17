import React from 'react';


const Drugs = (props) => {

    return (

<div>
   <h1>Profile header</h1>
   <p>Lorem ipsum</p>



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


</div>

)};

export default Drugs;




