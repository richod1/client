import Home from './components/Home';
import Resume from './components/Resume'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import React, {useState} from 'react'

function App() {
  const [result,setResult]=useState({});
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setResult={setResult}/>}/>
        <Route path='/resume' element={<Resume result={result}/>}/>
      </Routes>

    </div>
  );
}

export default App;
