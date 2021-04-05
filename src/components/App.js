import React from 'react';
import './App.css';
import TaskBoard from "./TaskBoard";

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

  render(){
    return (


        <div className="container">
          <TaskBoard tasks={this.state.tasks}/>
        </div>
    );
  }

}

export default App;
