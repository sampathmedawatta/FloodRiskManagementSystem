import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';


import PublicHeader from './Components/Shared/Header';
import PublicNavbar from './Components/Shared/Navbar';
import PublicLogin from './Components/Shared/Login';
import PublicFooter from './Components/Shared/Footer';
import RegDashbord from './Components/RegUser/RegDashbord';
import NonRegDashbord from "./Components/NonRegUser/NonRegDashbord";
import AdminDashbord from "./Components/Admin/AdminDashbord";
import MobileNavbar from './Components/Shared/MobileNavbar';
import Faq from './Components/Shared/Faqtable';
// Mock session object
const session = {
  role: 'user' 
};

function App() {

  return (
    <div className="App">
      <Router>
        <PublicHeader />
        <MobileNavbar />
        <main class="main">
          <PublicNavbar />
          <Routes>
            <Route exact path="/" element={<NonRegDashbord />} />
            <Route exact path="/home" element={<NonRegDashbord />} />
            <Route exact path="/dashboard" element={<RegDashbord />} />
            <Route exact path="/admin-dashboard" element={<AdminDashbord />} />
            <Route exact path="/faq" element={<Faq />} />
          </Routes>
        </main>
        <PublicFooter />
      </Router>
    </div>
  );
}

export default App
