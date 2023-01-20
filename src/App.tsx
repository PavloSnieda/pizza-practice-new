import React from 'react';
//pages & components
import Header from './components/Header';
import Home from './Pages/Home'
import NotFound from './Pages/NotFound';
//redux
import { useSelector } from 'react-redux'
// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './scss/app.scss';
//types 
import { RootState } from './redux/store'


const App: React.FC = () => {

  const searchValue = useSelector((state: RootState) => state.filterSlice.searchValue)


  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header searchValue={searchValue} />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home searchValue={searchValue} />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
