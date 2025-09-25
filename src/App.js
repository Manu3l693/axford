import React from "react";
import './pages/Home.css';
import './pages/Explore.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import ProjectReview from "./pages/projectReview";
import LandingPage from "./pages/Home";
import ExplorePage from "./pages/Explore";
import Department from "./pages/Department";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Forgotpassword from "./pages/forgotpass";
import LogOut from "./pages/logout";
import Dashboard from "./pages/dashboard";
import ControlAccess from "./pages/ControlAccess";

function App() {
  return (
      <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/Explore" element={<ExplorePage />}></Route>
            <Route path="/Department" element={<Department />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/projectreview" element={<ProjectReview/>}></Route>
            <Route path="control" element={<ControlAccess />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/forgot" element={<Forgotpassword/>}></Route>
            <Route path="/logout" element={<LogOut/>}></Route>
          </Routes>
       </BrowserRouter>

       
      </>
  );
}

export default App;
