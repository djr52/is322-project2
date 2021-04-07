import React from 'react';
import '../App.css'
import TaskBoard from "./TaskBoard";
import MobileTaskBoard from "./MobileTaskBoard";
import { DragDropContext } from 'react-beautiful-dnd';

import axios from 'axios';
import SelectTaskBoard from "./SelectTaskBoard";
const TABLET_BREAKPOINT = 768;

class App extends React.Component{
  state = {
      tasks: [],
      breakpoint: 'desktop',
      browserWidth: 0

  };

  TaskBoardResolution= (props)=>{
      const BreakPoint = props.BreakPoint;

      if (BreakPoint === 'mobile'){
          return <MobileTaskBoard tasks={this.state.tasks}/>
      }
      else{
          return <TaskBoard tasks={this.state.tasks}/>
      }
  };


  componentDidMount(){
    this.getData();
    window.addEventListener('resize', this.handleResize);
    this.handleResize()
  }

  handleResize = () =>{
      const browserWidth = window.innerWidth;
      let breakpoint = 'desktop';
      if(browserWidth < TABLET_BREAKPOINT){
          breakpoint = 'mobile'
      }
      this.setState({breakpoint: breakpoint, browserWidth: browserWidth})


  };

  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
        .then(response => {
          this.setState({tasks: response.data});
        }).catch(error => {
          error.toString();
    });
  }

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
      let taskList = this.state.tasks;

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
              <SelectTaskBoard BreakPoint={this.state.breakpoint} tasks={this.state.tasks}/>
          </div>
        </DragDropContext>

    );
  }

}

export default App;
