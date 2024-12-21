import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PopularPage from './pages/PopularPage';
import UpComingPage from './pages/UpComingPage';
import WatchListPage from './pages/WatchListPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/popular' element={<PopularPage/>}/>
        <Route path='/upcoming' element={<UpComingPage/>}/>
        <Route path='/watchlist' element={<WatchListPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
