import React,{useEffect,useState} from 'react';
import EachTask from './EachTask'
import Fetcher from '../hooks/Fetcher';


function TaskContainer(){
    let url='http://localhost:8000/api/get_all_tasks/';
    
    let [response,responseChanger]=Fetcher(url);
    let tasks=response;
    return(
        <div className="tasks-container">
            <div className="tasks">
                {tasks.map((task)=><EachTask id={task.id}/>)}
            </div>
        </div>
    );
};

export default TaskContainer