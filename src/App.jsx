import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Person from './Components/Person'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Retrieve from './Components/Retrieve'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/person' element={<Person />} />
        <Route path='/info' element={<Retrieve />} />
      </Routes>
    </Router>
  )
}

export default App