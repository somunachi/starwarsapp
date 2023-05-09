// import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import {Routes, Route} from 'react-router-dom'
import Moreinfo from './moreInfo/moreinfo'
import Home from './moreInfo/home'


function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/moreinfo' element={<Moreinfo />}/>
</Routes>
  )
}

export default App
