import React from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer'

function App() {
    document.title="To-do App"
    return (
        <div className="App">

            <h1 className="App-title">Todo App</h1>
            <TaskContainer />
            
        </div>
    );
}

export default App;
