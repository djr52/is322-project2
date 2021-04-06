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
  updateColumns = (task) =>{

  };
  onDragEnd = result =>{

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
