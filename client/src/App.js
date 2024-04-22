import React from 'react';


import PublicHeader from './Components/Header';
import PublicNavbar from './Components/Navbar';
import PublicLogin from './Components/Login';
import PublicFooter from './Components/Footer';
import RegDashbord from './Components/RegUser/RegDashbord';
import MobileNavbar from './Components/MobileNavbar';

// Mock session object
const session = {
  role: 'user' 
};

function App() {

  return (
    <div className="App">
      <PublicHeader/>
      <MobileNavbar/>
      <main class="main">
      <PublicNavbar/>
      <RegDashbord/>
      </main>
      <PublicFooter/>
    </div>
  );
}

export default App
