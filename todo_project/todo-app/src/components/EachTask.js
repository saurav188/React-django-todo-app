import React,{useEffect,useState} from 'react';
import Fetcher from '../hooks/Fetcher';

function EachTask(props){
    const id=props.id;
    const url='http://localhost:8000/api/get_task/'+id;

    let [response,responseChanger]=Fetcher(url);
    let task=response;
    
    return (
        <div  key={task.id} className="task">

            <input type="text" value={task.title} onChange={(e)=>{
                responseChanger(
                    {
                        "id":task.id,
                        "title":e.target.value,
                        "completed":task.completed
                    }
                )
            }}></input>

            <input type="button" value="edit" onClick={(e)=>{
                console.log(e.target.parentNode.children[0].value)
            }}></input>

            <input type="checkbox" value={task.completed} onInput={()=>{
                responseChanger(
                    {
                        "id":task.id,
                        "title":task.title,
                        "completed":!task.completed
                    }
                )
            }}></input>

        </div>
    );
};

export default EachTask;