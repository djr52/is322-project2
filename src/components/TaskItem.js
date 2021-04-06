import React from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'


const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

const TaskItem = props => {

    return(

        <Container>
            {props.task.title}
        </Container>
    )

};


export default TaskItem;