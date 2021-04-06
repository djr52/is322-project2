import React from 'react';
import TaskItem from "./TaskItem";
//import TaskColumn from "./TaskColumns";
import styled from "styled-components";
import TaskColumn from "./TaskColumns";

const Title = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
display: flex;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

class TaskBoard extends React.Component{

    render(){

        const uniqueColumns = [];
        this.props.tasks.map(task => {
            if (uniqueColumns.indexOf(task.column) === -1) {
                uniqueColumns.push(task.column)
            }
        });
        const columns = uniqueColumns.map(column => {

            const taskItems = this.props.tasks.map(task => {
                if(task.column === column){
                    return <TaskItem task={task} key={task.id}/>
                }
            });
            return <Title>{column}
                <TaskList>
                    {taskItems}
                </TaskList>
            </Title>
        });

        return(
            <Container>
                {columns}
            </Container>
        )

    }
}


export default TaskBoard;