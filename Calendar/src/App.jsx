import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Calendar from './components/Calendar/Calendar';
import Task from './components/Task/Task';

function App() {
    const [activeView, setActiveView] = useState("Week");
    const [tasks, setTasks] = useState([]);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <Navigation activeView={activeView} setActiveView={setActiveView} tasks={tasks} setTasks={setTasks} />
            <div style={{ flexGrow: 1, padding: "20px", marginLeft: "14%" }}>
                <Calendar activeView={activeView} tasks={tasks} />
            </div>
            <Task tasks={tasks} setTasks={setTasks} /> 
        </div>
    );
}

export default App;