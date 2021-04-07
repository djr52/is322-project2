import React from 'react';
import TaskItem from "./TaskItem";
import { Droppable } from 'react-beautiful-dnd';
import {BoardContainer, Title, TaskList} from '../react-styles/styles'


class TaskBoard extends React.Component{

    render(){

        const uniqueColumns = [];
        this.props.tasks.map(task => {
            if (uniqueColumns.indexOf(task.column) === -1) {
                uniqueColumns.push(task.column)
            }
        });
        //DO not manipulate data here, for example, when changing the column type, do it in the App, the algorithm below will only re render the new set
        const columns = uniqueColumns.map((column, cIndex) => {
            const taskItems = this.props.tasks.map((task, tIndex) => {
                if(task.column === column){
                    return <TaskItem task={task} key={task.id} index={tIndex} markTask={this.props.markTask}/>
                }
            });
            return<Title>
                {column}
                <Droppable droppableId={column} index={cIndex}>

                    {(provided,snapshot) =>(
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}

                        >
                            {taskItems}
                            {provided.placeholder}
                        </TaskList>
                    )}

                </Droppable>

            </Title>
        });

        return(
            <BoardContainer>
                {columns}
            </BoardContainer>
        )

    }
}


export default TaskBoard;