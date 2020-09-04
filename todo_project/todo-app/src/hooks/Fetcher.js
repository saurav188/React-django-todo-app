import {useEffect,useState} from 'react';

function Fetcher(url){
    useEffect(()=>{
        async function AllTaskFetcher(url){
            const response=await fetch(url);
            const json_response=await response.json();
            getTask(json_response);
        };
        AllTaskFetcher(url);
    },[url]);

    const [task,getTask]=useState([]);
    return [task,getTask];
}

export default Fetcher;