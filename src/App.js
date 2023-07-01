import React from 'react'
import Main from './Components/Main'

import Nav from './Components/Nav';
import About from "./Components/About";

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    <>
      <Nav></Nav>

        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/about' element={<About/>}></Route>



          </Routes>

    </>
  )
}

export default App