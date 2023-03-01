import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import About from './views/About'
import Home from './views/Home'
import NotFound from './views/NotFound'
import ServiceDetail from './views/ServiceDetail'
import Services from './views/Services'

const Layout = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path={"/services/:id"} element={<ServiceDetail />} />
                <Route path={"/services"} element={<Services />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout