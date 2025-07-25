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
import Footer from './componets/Footer'

function App() {
 

  return (
    <>
    <HashRouter>
  <Routes>
    <Route path="/" element={<KobeUkoLayout />}>
      <Route index element={
        <>
          <section id="home"><Header /></section>
          <section id="about-me"><AboutMe /></section>
          <section id="experience"><Experience /></section>
          <section id="my-work"><MyWork /></section>
          <section id="footer"><Footer/></section>
        </>
      } />
    </Route>
  </Routes>
</HashRouter>
    </>
  )
}

export default App
