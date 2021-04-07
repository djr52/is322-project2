import React from 'react';
import '../App.css'
import TaskBoard from "./TaskBoard";
import { DragDropContext } from 'react-beautiful-dnd';

import axios from 'axios';

class App extends React.Component{
  state = {
    tasks: []

  };

  componentDidMount(){
    this.getData();
  }
  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
        .then(response => {
          this.setState({tasks: response.data});
        }).catch(error => {
          error.toString();
    });
  }
  updateColumns = (task, column) =>{


  };
  onDragEnd = result =>{
      const {destination, source, draggableId} = result;
      if(!destination){
          return
      }

      if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
      )
      {
          return;
      }

      const end = destination.droppableId;
      const taskIndex = this.state.tasks.findIndex(t => t.title === draggableId);
      var taskList = this.state.tasks;

      taskList.splice(taskIndex, 1);

      taskList.push({
          title: draggableId,
          id: this.state.tasks.length + 1,
          type: 'task',
          column: end
      });

      this.setState(taskList)

  };



  render(){
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="container App">
            <TaskBoard tasks={this.state.tasks}/>
          </div>
        </DragDropContext>

    );
  }

}

export default App;
