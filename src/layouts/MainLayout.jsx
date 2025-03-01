import React from "react"
import Navbar from "../components/navbar/Navbar"
import {Outlet} from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <footer>
          <div className="text-center my-4">
            <p>
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a href="https://www.linkedin.com/in/mirgubad-akbarov-191b32242/">
                Mirgubad Akbarov
              </a>
              .
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default MainLayout
