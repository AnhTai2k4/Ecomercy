import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import {routes} from './routes/index'
import FooterComponent from './components/FooterComponent/FooterComponent'

// Main App Component
export default function App() {
  return (
    <>
      <Routes>
        {
          routes.map((route)=>{
            const Layout= route.isShowHeader ? HeaderComponent: Fragment
            return(< Route path= {route.path} element = {
              <>
              <Layout/>
              <route.page/>
              </>
            
          } />)
          })
        }
      </Routes>
    <FooterComponent/>

    </>
  )
}