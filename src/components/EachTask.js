import React from 'react';
import Fetcher from '../hooks/Fetcher';

function EachTask(props){
    const id=props.id;
    const url='https://frozen-savannah-33670.herokuapp.com/api/get_task/'+id;
    let [response,responseChanger]=Fetcher(url);
    let task=response;
    function EditCompletedStatus(){
        responseChanger({
            "id":task.id,
            "title":task.title,
            "completed":!task.completed
        });
        fetch(`https://frozen-savannah-33670.herokuapp.com/api/edit_task/${id}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id":task.id,
                "title":task.title,
                "completed":!task.completed
            })
        });
    };
    let completed_status;
    if(task.completed){
        completed_status=<input type="checkbox" checked onInput={EditCompletedStatus}></input>
    }else{
        completed_status=<input type="checkbox" unchecked={String(task.completed)} onInput={EditCompletedStatus}></input>
    };
    return (
        <div  key={task.id} className="task">
            <input type="text" value={task.title} onChange={(e)=>{
                responseChanger({
                    "id":task.id,
                    "title":e.target.value,
                    "completed":task.completed
                })
            }}></input>
            <input type="button" class="edit-btn" value="edit" onClick={()=>{
                fetch(`https://frozen-savannah-33670.herokuapp.com/api/edit_task/${id}`, {
                    method: 'PUT',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(task)
                });
            }}></input>
            {completed_status}
            <input type="button" class="del-btn" value="del" onClick={()=>{
                fetch(`https://frozen-savannah-33670.herokuapp.com/api/delete_task/${id}`, {
                    method: 'DELETE'
                });
                window.location.reload();
            }}></input>
        </div>
    );
};

export default EachTask;