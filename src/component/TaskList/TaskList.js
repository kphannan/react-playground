import React from 'react';


const TaskList = (props) => {

    return (
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">{props.label}</h3>
  </div>
  <div class="panel-body">
    <div class="spinner spinner-lg"></div>
    Panel content
  </div>
</div>
)};

export default TaskList;




