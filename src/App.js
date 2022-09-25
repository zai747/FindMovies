import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './Details'
import Listing from './Listing'
import Navb from './navb/Navb'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navb/>
    
    <Routes>
      <Route path='/detail/:id' element={<Details/>}></Route>
      <Route path='/' element={<Listing/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App