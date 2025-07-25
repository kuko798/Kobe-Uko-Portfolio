import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import KobeUkoLayout from './componets/structural/KobeUkoLayout'
import AboutMe from './componets/AboutMe'
import MyWork from './componets/MyWork'
import Header from './componets/Header'
import Experience from './componets/Experience'

function App() {
 

  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<KobeUkoLayout/>}>
      <Route index element={<Header/>}/>
      <Route path="/about-me" element={<AboutMe/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/my-work" element={<MyWork/>}/> 
      </Route>
    </Routes>
  </HashRouter>
    </>
  )
}

export default App
