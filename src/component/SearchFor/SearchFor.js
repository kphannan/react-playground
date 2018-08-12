import React from 'react';


const SearchFor = (props) => {

    return (
        <div class="row row-cards-pf">
        <div class="col-xs-6 col-sm-8 col-md-8">
        <div class="card-pf">
          <div class="card-pf-heading">

            <div class="dropdown card-pf-time-frame-filter">
              <button type="button" class="btn btn-primary">Add New {props.name}</button>
            </div>
            <h2 class="card-pf-title">
              {props.label}
            </h2>
          </div>
          <div class="card-pf-body">
            <form>
                <div class="form-group">
                    <label for="addressLine1Input">Search for {props.name}</label>
                    <input type="email" class="form-control" id="addressLine1Input" placeholder={props.placeholderText} />
                    <span id="helpBlock" class="help-block hide">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                    <span id="helpBlock" class="help-block hide">explain the error.</span>
                </div>
            </form>

          </div>
        </div>

        </div>
        </div>
)};

export default SearchFor;
