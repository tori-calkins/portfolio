import React from 'react'
import Home from './pages/Home'
import Frontend from './pages/FrontendProjects'
import FullStackProjects from'./pages/FullStackProjects'
import AboutMe from './pages/AboutMe'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactMeForm from './pages/ContactMeForm'
import BackToTopButton from './components/BackToTopButton.js';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/frontend" element={<Frontend/>}/>
      <Route path="/fullstackprojects" element={<FullStackProjects/>}/>
      <Route path="/aboutme" element={<AboutMe/>}/>
      <Route path="/contactmeform" element={<ContactMeForm/>}/>
    </Routes>
    <BackToTopButton />
    </>
  )
}

export default App
