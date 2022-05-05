import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        {/* <Route path='/:id' element={ <MeetingPage /> } /> */}
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

