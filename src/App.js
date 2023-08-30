import React, { useState } from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers/home';
import { CTA, Brand, Navbar } from './components2';
import Menu from './menu/Menu'
import Image from './components2/Image_optimi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/home/Home';

import Register from './register/Register'

import Category from './category/Category';

import About from './about/About';
// import SingleCocktail from './category/pages/SingleCocktail';
import Error from './category/pages/Error';


import './App.css';
import Model3d from './model3d/Model3d';

function App2(){  
  return (
    <Router>
      <div className='App2'>
          <Menu />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/category" element={<Category/>} />
            <Route path='/category/about' element={<About />} />
            {/* <Route path='/category/cocktail/:id' element={<SingleCocktail />} /> */}
            <Route path='/category/*' element={<Error />} />
            <Route path='/model' element={<Model3d />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
          
      </div>
    </Router>
  )
}

export default App2