import React from "react"
import Navbar from "../components/navbar/Navbar"
import {Outlet} from "react-router-dom"
import Footer from "../components/footer/Footer"

const MainLayout = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default MainLayout
