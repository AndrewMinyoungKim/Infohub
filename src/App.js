import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dummy from './Dummy';
import Home from './Home';
import Navbar from './Navbar';
import MovieStar from './MovieStar';
import MovieStarList from './MovieStarList';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <div className='content'>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/MovieStar/:id" element={<MovieStar/>}/>
                <Route path="/MovieStarList" element={<MovieStarList/>}/>
                <Route path="/Dummy" element={<Dummy/>}/>
              </Routes>
            </div>
        </div>
    </Router>
  )
}

export default App