import { useState } from 'react'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/read/:id' element={<Read/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
