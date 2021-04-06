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
        const columns = uniqueColumns.map(column => {
            const taskItems = this.props.tasks.map((task,index) => {
                if(task.column === column){
                    return <TaskItem task={task} key={task.id} index={index}/>
                }
            });
            return<Title>
                {column}
                <Droppable droppableId={column}>

                    {provided =>(
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
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