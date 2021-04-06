import React from 'react';
import {ItemContainer} from '../react-styles/styles'
import {Draggable} from 'react-beautiful-dnd'




const TaskItem = props => {

    return(
        <Draggable draggableId={props.task.title} index={props.task.id}>
            {provided =>(
                <ItemContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {props.task.title}
                </ItemContainer>
            )}

        </Draggable>


    )

};


export default TaskItem;