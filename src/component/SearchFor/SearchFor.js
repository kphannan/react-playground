import React from 'react';


const SearchFor = (props) => {

    return (
        <div className="row row-cards-pf">
        <div className="col-xs-6 col-sm-8 col-md-8">
        <div className="card-pf">
          <div className="card-pf-heading">

            <div className="dropdown card-pf-time-frame-filter">
              <button type="button" className="btn btn-primary">Add New {props.name}</button>
            </div>
            <h2 className="card-pf-title">
              {props.label}
            </h2>
          </div>
          <div className="card-pf-body">
            <form>
                <div className="form-group">
                    <label for="addressLine1Input">Search for {props.name}</label>
                    <input type="email" className="form-control" id="addressLine1Input" placeholder={props.placeholderText} />
                    <span id="helpBlock" className="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                    <span id="helpBlock" className="help-block hide">explain the error.</span>
                </div>
            </form>

          </div>
        </div>

        </div>
        </div>
)};

export default SearchFor;
