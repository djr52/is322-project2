import React from 'react';
import TaskItem from "./TaskItem";
//import TaskColumn from "./TaskColumns";
import styled from "styled-components";
import TaskColumn from "./TaskColumns";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
class TaskBoard extends  React.Component{

    render(){
        const taskItems = this.props.tasks.map(task => {
            return <TaskItem task={task} key={task.id}/>
        });
        const uniqueColumns = [];
        this.props.tasks.map(task => {
            if (uniqueColumns.indexOf(task.column) === -1) {
                uniqueColumns.push(task.column)
            }
        });
        const columns = uniqueColumns.map(column =>{
            return <TaskColumn column={column} key={column.id}/>
        });
        return(
            <Container>
                <div>
                </div>

                <ul className="task-list task-group">
                    {taskItems}
                </ul>
            </Container>


        )

    }
}


export default TaskBoard