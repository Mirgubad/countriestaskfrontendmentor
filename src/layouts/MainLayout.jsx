import React from "react"
import Navbar from "../components/navbar/Navbar"
import {Outlet} from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
