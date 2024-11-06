import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import PuppyList from './PuppyList.jsx';


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<PuppyList/>} />
      </Routes>
    </>
  )
}

export default App