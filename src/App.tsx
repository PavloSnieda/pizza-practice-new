import React from 'react';
//pages & components
import Header from './components/Header';
import Home from './Pages/Home'
import NotFound from './Pages/NotFound';

import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App: React.FC = () => {


  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>


          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
