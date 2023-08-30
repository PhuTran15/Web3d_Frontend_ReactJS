import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import Error from './pages/Error';
// import components
import { AppProvider } from './context';
import './index.css'
function Category() {
  return (
    <AppProvider>
      <Home />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router> */}
    </AppProvider>
  );
}

export default Category;
