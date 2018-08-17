import React from 'react';

import TaskList from '../TaskList/TaskList';

const Tasks = (props) => {

    return (
      <div>
        <TaskList  label={'Past Due Tasks'} tasks={[]} />
        <TaskList  label={'Today\'s Tasks'} tasks={[]} />
        <TaskList  label={'Future Tasks'}   tasks={[]} />
      </div>
)};

export default Tasks;






