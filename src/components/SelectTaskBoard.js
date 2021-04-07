import React from 'react';
import MobileTaskBoard from "./MobileTaskBoard";
import TaskBoard from "./TaskBoard";

const SelectTaskBoard = props =>{
    const BreakPoint = props.BreakPoint;

    if (BreakPoint === 'mobile'){
        return <MobileTaskBoard tasks={props.tasks}/>
    }
    else{
        return <TaskBoard tasks={props.tasks}/>
    }
};

export default SelectTaskBoard;