import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
const TaskItem = props => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    {props.task.column}
                </Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="list-group-item">
                        {props.task.title}
                    </ListGroupItem>
                </ListGroup>

            </Card.Body>
        </Card>


    )

};


export default TaskItem;