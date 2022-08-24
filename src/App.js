import React from 'react';
import ScenarioForm from './components/ScenarioForm';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Success from "./components/Success";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <Router>
            <div className="App" dir="rtl" style={{width: '95%', padding: '0', margin: '0 auto'}}>
                <h1 style={{textAlign: 'center', margin: '0'}}>מחולל תסריטים</h1>
                <p style={{textAlign: 'center', fontSize: '10pt'}}>v 3,14</p>
                <br/>
                <Routes>
                    <Route index path="/" element={<ScenarioForm/>}/>
                    <Route path="/success" element={<Success/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
