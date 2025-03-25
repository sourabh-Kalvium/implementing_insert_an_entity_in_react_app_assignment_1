// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import AddBooks from "./AddBooks"
import  {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Routes>
           <Route path="/" element={ <Home/>}/>
           <Route path="/addbook" element={<AddBooks/>}/>
       </Routes>
    </BrowserRouter>
   
  </div>
  );
}

export default App;
