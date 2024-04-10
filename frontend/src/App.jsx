import Home from "./pages/Home" 
import Food from "./pages/Food"
import Road from "./pages/Road"
import Clean from "./pages/Clean"
import AddData from "./components/AddData"
import Login from "./pages/login"
import SignUp from "./pages/Signup"
import Dashboard from "./components/Dashboard"
import Dashboardclean from "./pages/DashboardClean"
import DashboardFood from "./pages/DashboardFood"
import DashboardRoad from "./pages/DashboardRoad"


import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clean' element={<Clean/>} />
          <Route path='/food' element={<Food />} />
          <Route path='/road' element={<Road />} />
          <Route path="/adddata" element={<AddData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/adddata" element={<AddData />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/Dashboardclean" element={<Dashboardclean/>}/>
          <Route path="/DashboardFood" element={<DashboardFood/>}/>
          <Route path="/DashboardRoad" element={<DashboardRoad/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
