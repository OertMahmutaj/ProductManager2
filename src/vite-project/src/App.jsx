import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/people/" />
            <Route element={<Details/>} path="/people/:id" />    
        </Routes>
      </BrowserRouter>                           
    </div>
  );
}
export default App;

