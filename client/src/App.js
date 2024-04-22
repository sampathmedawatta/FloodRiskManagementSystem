import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import PublicHeader from './Components/Header';
import PublicNavbar from './Components/Navbar';
import PublicLogin from './Components/Login';
import PublicFooter from './Components/Footer';
import RegDashbord from './Components/RegUser/RegDashbord';
import Dashboard from "./Components/User/Dashboard";
import MobileNavbar from './Components/MobileNavbar';

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
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/home" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<RegDashbord />} />
          </Routes>
        </main>
        <PublicFooter />
      </Router>
    </div>
  );
}

export default App
