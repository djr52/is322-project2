import React from 'react';
import TaskItem from "./TaskItem";

class TaskBoard extends  React.Component{

    render(){
        const taskItems = this.props.tasks.map(task => {
            return <TaskItem task={task} key={task.id}/>
        });
        return(
            <ul className="task-list task-group">
                {taskItems}
            </ul>
        )

    }
}


export default TaskBoard