import React from 'react';
import {ItemContainer} from '../react-styles/styles'
import {Draggable} from 'react-beautiful-dnd'




const TaskItem = props => {

    return(
        <Draggable draggableId={props.task.title} index={props.task.id}>
            {(provided, snapshot) =>(
                <ItemContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}

                >
                    {props.task.title}
                </ItemContainer>
            )}

        </Draggable>


    )

};


export default TaskItem;