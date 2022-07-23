import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SingleMovie from './SingleMovie'
import Error from './Error'
import './App.css'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/Movies/:id' element={<SingleMovie />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  )
}

export default App
