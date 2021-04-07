import TaskItem from "./TaskItem";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import { Droppable } from 'react-beautiful-dnd';
import {BoardContainer, Title, TaskList} from '../react-styles/styles'
import React from "react";


class MobileTaskBoard extends React.Component{

    displayTasks = (column, cIndex, taskList) => {
        return(
            <Droppable droppableId={column} index={cIndex}>

                {(provided,snapshot) =>(
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}

                    >
                        {taskList}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        )

    };

    render(){

        const DropDownItems = (column, cIndex, taskList) => {
            return <Dropdown.Item onClick={() => this.displayTasks(column, cIndex, taskList)}>{column}</Dropdown.Item>

        };


        const uniqueColumns = [];
        this.props.tasks.map(task => {
            if (uniqueColumns.indexOf(task.column) === -1) {
                uniqueColumns.push(task.column)
            }
        });
        const columns = uniqueColumns.map((column, cIndex) => {
            const taskItems = this.props.tasks.map((task, tIndex) => {
                if(task.column === column){
                    return <TaskItem task={task} key={task.id} index={tIndex} markTask={this.props.markTask}/>
                }
            });
            return<Title>

                {DropDownItems(column, cIndex, taskItems)}
            </Title>


        });

        return(
            <BoardContainer>
                <DropdownButton title="Select a Task Category">
                {columns}
                </DropdownButton>
            </BoardContainer>
        )

    }
}


export default MobileTaskBoard;
