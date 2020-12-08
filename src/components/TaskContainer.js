import React from 'react';
import EachTask from './EachTask'
import Fetcher from '../hooks/Fetcher';


function TaskContainer(){
    let url='https://frozen-savannah-33670.herokuapp.com/api/get_all_tasks/';
    
    let [response]=Fetcher(url);
    let tasks=response;

    function createTask(task_title){
        if(task_title!==""&&task_title!=="enter your task here before saving..."){
            fetch("https://frozen-savannah-33670.herokuapp.com/api/create_task/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "title":task_title,
                    "completed":false
                })
            });
            document.querySelector('.task-creation').children[0].value="";
            window.location.reload();
        }else{
            document.querySelector('.task-creation').children[0].value="enter your task here before saving..."
        };
    };
    return(
        <div className="tasks-container">
            <div className="task-creation">
                <input type="text" placeholder="task here"></input>
                <input type="button" value="Save" onClick={(e)=>createTask(e.target.parentNode.children[0].value)}></input>
            </div>
            <div className="tasks">
                {tasks.map((task)=><EachTask id={task.id}/>)}
            </div>
        </div>
    );
};

export default TaskContainer