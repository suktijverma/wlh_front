import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Navbar1 from './pages/Auth/navbar1'
import Team from './pages/Auth/Team'
import Card from './pages/Auth/Card'
import Contact from './pages/Auth/Contact'
import Form from './pages/Auth/Form'
// import Timer from './pages/Auth/Main'
// import Main1 from './pages/Auth/Main1'
import Main2 from './pages/Auth/Main2'
import Index1 from './pages/Auth/Index1'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/Auth' element={<Auth/>}/>
        {/* <Route path='/Navbar1' element={<Navbar1/>}/> */}
        <Route path='/Team' element={<Team/>}/>
        <Route path='/' element={<Card/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Form' element={<Form/>}/>
        {/* <Route path='/Main1' element={<Main1/>}/> */}
        <Route path='/Main2' element={<Main2/>}/>
        {/* <Route path='/Index1' element={<Index1/>}/> */}


    </Routes>
  )
}

export default AllRoutes