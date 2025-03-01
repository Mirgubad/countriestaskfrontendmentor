import "./App.css"
import CountryDetails from "./pages/CountryDetails"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="details/:countryName" element={<CountryDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
