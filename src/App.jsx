import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '/src/Pages/Home'
import Success from '/src/Pages/success'
import Error from '/src/Pages/Error'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
