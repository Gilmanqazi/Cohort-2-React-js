import React from 'react'
import Navbar from "./components/Navbar.jsx"
import Section1 from "./components/Section1.jsx"
import Aside from "./components/Aside.jsx"

const App = () => {
  return (
    <div className="flex h-screen py-5 px-5">
  <Aside />

  <div className="flex-1 flex flex-col">
    <Navbar />
    <Section1 />
  </div>
</div>
  )
}

export default App
