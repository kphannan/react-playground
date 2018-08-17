import React from 'react';


const TaskList = (props) => {

    return (
<div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">{props.label}</h3>
  </div>
  <div className="panel-body">
    <div className="spinner spinner-lg"></div>
    Panel content
  </div>



</div>
)};

export default TaskList;


        // <TaskList  label={'Past Due Tasks'} tasks={[]} />
        // <TaskList  label={'Today\'s Tasks'} tasks={[]} />
        // <TaskList  label={'Future Tasks'}   tasks={[]} />




